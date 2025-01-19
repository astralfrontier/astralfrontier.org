function debounce(func, wait) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

function initSearch() {
  var $searchElement = $("#navbar-search-element");
  var $searchInput = $("#navbar-search-input");
  var $searchDropdown = $("#navbar-search-dropdown");

  var MAX_ITEMS = 10;

  var options = {
    bool: "AND",
    fields: {
      title: { boost: 2 },
      body: { boost: 1 },
    },
  };
  var index;

  var initIndex = async function () {
    if (index === undefined) {
      index = fetch("/search_index.en.json").then(async function (response) {
        return await elasticlunr.Index.load(await response.json());
      });
    }
    let res = await index;
    return res;
  };

  $searchInput.on(
    "keyup",
    debounce(async function () {
      var term = $searchInput.val().trim();

      if (!term) {
        $searchElement.removeClass("is-active");
      } else {
        var results = (await initIndex()).search(term, options);
        if (results.length === 0) {
          $searchElement.addClass("is-active");
          $searchDropdown.empty();
          var anchor = $("<a />").addClass("navbar-item").text("(no results)");
          $searchDropdown.append(anchor);
        } else {
          $searchElement.addClass("is-active");
          $searchDropdown.empty();
          for (var i = 0; i < Math.min(results.length, MAX_ITEMS); i++) {
            var item = results[i];
            var anchor = $("<a />")
              .addClass("navbar-item")
              .attr("href", item.ref)
              .text(item.doc.title);
            $searchDropdown.append(anchor);
          }
        }
      }
    }, 150)
  );
}

$(document).ready(function () {
  $(".navbar-burger").on("click", function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  initSearch();
});
