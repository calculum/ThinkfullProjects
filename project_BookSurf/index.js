const GBOOK_SEARCH_URL = 'https://www.googleapis.com/books/v1/';

function getDataFromApi(searchTerm, callback) {
  const query = {
    accesspoart: 'snippet',
    key: 'AIzaSyAouaY0zJ3VYlPM-iNeww5hQaUWEPAfOYM',
    q: `${searchTerm} in:name`,
    per_page: 2
  }
  $.getJSON(GBOOK_SEARCH_URL, query, callback);
}

function renderResult(result) {
  console.log(result);
  return `
      <div>
      <a href="${result.default}"><img src="${result.default}" alt="video thumbnail image"></a>
      <p>Video Name: <span class="js-video-title">${result.snippet.title}</span></p>
      <p>Channel name: <span class="js-channel-title">${result.snippet.channelTitle}</span></p>
      <p>Channel description: <span class="js-video-details">${result.snippet.description}
      </span></p>
      </div>
      `
}

function displayBookSearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayBookSearchData);
  });
}

$(watchSubmit);
