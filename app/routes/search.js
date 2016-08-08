/*globals $:false */
import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    query: {
        refreshModel: true
    },
    page: {
        refreshModel: true
    }
  },
  actions: {
    // go to the main page if error occurred
    error(error) {
      if (error) {
        return this.transitionTo('/');
      }
    }
  },
  model(params) {
    if (params.query === '') {
      return { isEmptyQuery: true };
    }

    var result = { query: params.query };
    var xhrData = {
      "api_key": "72b56103e43843412a992a8d64bf96e9",
      query: params.query
    };

    if (params.page) {
      xhrData.page = params.page;
    }

    return $.ajax({
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      data: xhrData
    }).then(function (data) {
      data.results.forEach(function (item) {
        item.year = item["release_date"].split('-')[0];
      });

      // TMDB API doesn't allow to get more than 1000th page
      var totalPages = data["total_pages"];
      totalPages = totalPages > 1000 ? 1000 : totalPages;

      if (totalPages > 1) {
        var currentPage = data.page;
        var pagesList;

        var makeList = function (first, last) {
          var list = [];

          for (var i = first; i <= last; i++) {
            list.push(i);
          }

          return list;
        };

        result.isMultiplePages = true;

        // current page + 2 previous pages + 2 next pages
        var pagesWindow = 5;

        if (totalPages < pagesWindow) {
          pagesList = makeList(1, totalPages);
        } else {
          // count of page numbers from 1 to current
          var prefix = currentPage - 1;
          // count of page numbers from current to last one
          var postfix = totalPages - currentPage;

          if ((prefix >= 2) && (postfix >= 2)) {
            pagesList = makeList(currentPage - 2, currentPage + 2);
          } else if (prefix < 2) {
            pagesList = makeList(1, pagesWindow);
          } else if (postfix < 2) {
            pagesList = makeList(totalPages - pagesWindow + 1, totalPages);
          }
        }

        result.paginator = pagesList;
      }

      result.data = data;

      return result;
    });
  }
});
