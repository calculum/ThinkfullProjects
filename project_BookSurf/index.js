const GBOOK_SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes?';

function getDataFromApi(searchTerm, callback) {
  const query = {
    fields: 'items',
    key: 'AIzaSyAouaY0zJ3VYlPM-iNeww5hQaUWEPAfOYM',
    q: `${searchTerm} , subject`,
    orderBy: 'relevance',
    maxResults: 40,
  }
  $.getJSON(GBOOK_SEARCH_URL, query, callback);
}

function renderResult(result) {
  console.log(result);

  return `
      <div class="flex-container">
        <div class="col-3">
          <img src="${result.volumeInfo.imageLinks.thumbnail}" alt="Book thumbnail image">
          <h3 class="js-book-title" title="${result.volumeInfo.title}">${result.volumeInfo.title}</h3>
          <h3 class="js-book-author" title="${result.volumeInfo.authors}">${result.volumeInfo.authors}</h3>
        </div>
      </div>
      `

}

function displayBookSearchData(data) {
  const bookList = [];
//Iterate book information from API
  for (let i = 0; i < data.items.length; i++) {
      bookList.push(renderResult(data.items[i]));
  }

  $('.js-search-results').html(bookList);
}

function watchSubmit() {
  $('.js-search-form').submit(
        function (event) {
            event.preventDefault();
            const query = $('.js-query').val();
            const queryClr = $(event.currentTarget).find(".js-query")
            getDataFromApi(query, displayBookSearchData);
            queryClr.val("");
        });
        
}

$(watchSubmit);
