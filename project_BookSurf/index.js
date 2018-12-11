const GBOOK_SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes?';

function getDataFromApi(searchTerm, callback) {
  const query = {
    fields: 'items',
    key: 'AIzaSyAouaY0zJ3VYlPM-iNeww5hQaUWEPAfOYM',
    q: `${searchTerm} in:name`,
    maxResults: 5,
  }
  $.getJSON(GBOOK_SEARCH_URL, query, callback);
}

function renderResult(result) {
  console.log(result);

  return `
      <div>
      <a href="${result.volumeInfo.previewLink}" target=_blank><img src="${result.volumeInfo.imageLinks.thumbnail}" alt="Book thumbnail image"></a>
      <p>Book Name: <span class="js-book-title">${result.volumeInfo.title}</span></p>
      <p>Author: <span class="js-book-title">${result.volumeInfo.authors}</span></p>
      <p>Book description: <span class="js-book-details">${result.volumeInfo.description}</span></p>
      </div>
      `
}

function displayBookSearchData(data) {
  const bookList = [];
  for (let i = 0; i < data.items.length; i++) {
      bookList.push(renderResult(data.items[i]));
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
