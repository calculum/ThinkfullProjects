const GBOOK_SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes?';

function getDataFromApi(searchTerm, callback) {
  const query = {
    fields: 'items(volumeInfo/title,volumeInfo/authors,etag,id)',
    key: 'AIzaSyAouaY0zJ3VYlPM-iNeww5hQaUWEPAfOYM',
    q: `Firefly`,
    maxResults: 5,
  }
  $.getJSON(GBOOK_SEARCH_URL, query, callback);
}

function renderResult(result) {
  console.log(result);
  return `
      <div>
      <a href="${result.default}"><img src="${result.default}" alt="Book thumbnail image"></a>
      <p>Book Name: <span class="js-book-title">${result.items.volumeInfo.title}</span></p>
      <p>Author: <span class="js-book-title">${result.volumeInfo.authors}</span></p>
      <p>Book description: <span class="js-book-details">${result.snippet.description}
      </span></p>
      </div>
      `
}

function displayBookSearchData(data) {
  const results = data.items.map(function (item,index) {
      renderResult(item);
  $('.js-search-results').html(results);
  });
}

function watchSubmit() {
  $('.js-search-form').submit(
        function (event) {
            event.preventDefault();
            const queryTarget = $(event.currentTarget).find('.js-query');
            const query = queryTarget.val();
            // clear out the input
            queryTarget.val("");
            getDataFromApi(query, displayBookSearchData);
        });
}

$(watchSubmit);
