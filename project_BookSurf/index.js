const GBOOK_SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes?';

function getDataFromApi(searchTerm, callback) {
  const query = {
    fields: 'items',
    key: 'AIzaSyAouaY0zJ3VYlPM-iNeww5hQaUWEPAfOYM',
    q: `${searchTerm}`,
    orderBy: 'relevance',
    maxResults: 28,
  }
  $.getJSON(GBOOK_SEARCH_URL, query, callback);
}

function renderResult(result) {
  console.log(result);

  return `
      <div class="flex-container">
        <div class="col-3">
          <img src="${result.volumeInfo.imageLinks.thumbnail}" alt="Book thumbnail image">
          <h3><span class="js-book-title">${result.volumeInfo.title}</span></h3>
          <h3 class="js-book-author">${result.volumeInfo.authors}</h3>
        </div>
      </div>
      `

}

function displayBookSearchData(data) {
  const bookList = [];
  const apiImg = ${result.volumeInfo.imageLinks.thumbnail};

  for (let i = 0; i < data.items.length; i++) {
      bookList.push(renderResult(data.items[i]));
  }
  if (apiImg == undefined) {
    $('.col-3').add
  }
  $('.js-search-results').html(bookList.join(""));
}

function watchSubmit() {
  $('.js-search-form').submit(
        function (event) {
            event.preventDefault();
            const query = $('.js-query').val();
            getDataFromApi(query, displayBookSearchData);
        });
        
}

$(watchSubmit);
