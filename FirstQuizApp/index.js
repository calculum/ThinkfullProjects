

const questionList = [
  {
    number: 1,
    text: `1. The process of burning of municipal solid waste at high temperature is called______`,
    ans1: `Incineration`,
    ans2: `Composting`,
    ans3: `Land filing`,
    ans4: `Shredding`,
    correctAns: `Incineration`,
  },

  {
    number: 2,
    text: `2. Which of the following is a biodegradable waste?`,
    ans1: `Polythene bags`,
    ans2: `Synthetic fiber`,
    ans3: `Food waste`,
    ans4: `Paper`,
    correctAns: 'Polythene bags',
  },
  {
    number: 3,
    text: `3.In which method of disposal of municipal solid waste, the waste is dumped in the soil?`,
    ans1: `Incineration`,
    ans2: `Composting`,
    ans3: `Land filing`,
    ans4: `Shredding`,
    correctAns: 'Land filing',
  },
  {
    number: 4,
    text: `4. Which of the following is correct regarding disposal of waste by land filling?`,
    ans1: `Economical method`,
    ans2: `Preferred in low lying areas`,
    ans3: `Foul gases are not produced`,
    ans4: `Separation of different types of waste not required`,
    correctAns: 'Foul gases are not produced',
  },
  {
    number: 5,
    text: `5. The density of ash produced in the municipal solid waste is`,
    ans1: `100 kg/m<sup>3</sup>`,
    ans2: `450 kg/m<sup>3</sup>`,
    ans3: `700 kg/m<sup>3</sup>`,
    ans4: `1000 kg/m<sup>3</sup>`,
    correctAns: '700 kg/m<sup>3</sup>',
  },
  {
    number: 6,
    text: `6. The process of decomposition of biodegradable solid waste by earthworms is called`,
    ans1: `Land fills`,
    ans2: `Shredding`,
    ans3: `Vermi-composting`,
    ans4: `Composting`,
    correctAns: 'Vermi-composting',
  },
  {
    number: 7,
    text: `7.The waste produced in cotton mills are`,
    ans1: `Municipal solid waste`,
    ans2: `Non biodegradable waste`,
    ans3: `Hazardous waste`,
    ans4: `Non hazardous waste`,
    correctAns: 'Non hazardous waste',
  },
  {
    number: 8,
    text: `8. Which of the following is not the land filling method?`,
    ans1: `Bangalore method`,
    ans2: `Area method`,
    ans3: `Depression method`,
    ans4: `Trench method`,
    correctAns: 'Bangalore method',
  },
  {
    number: 9,
    text: `9. ______ is a liquid that passes through solid waste and extract suspended impurities from it.`,
    ans1: `Leachate`,
    ans2: `Sludge`,
    ans3: `Distilled water`,
    ans4: `Municipal waste`,
    correctAns: 'Leachate',
  },
  {
    number: 10,
    text: `10. Which of the following is not the municipal solid waste?`,
    ans1: `Radioactive substance`,
    ans2: `Ashes`,
    ans3: `Food waste`,
    ans4: `Rubbish`,
    correctAns: 'Radioactive substance',
  },
]

let questionCount = 0;
let score = 0;
let question = 0;

function questionSnippet() {
  return `
  <form>
    <h1 id="question-page" role="main">${questionList[question].text}</h1>
    <fieldset>
      <label for="c1">
        <input id="c1" type="radio" name="option" value="${questionList[question].ans1}">
        <span>${questionList[question].ans1}</span>
      </label>
      <label for="c2">
        <input id="c2" type="radio" name="option" value="${questionList[question].ans2}">
        <span>${questionList[question].ans2}</span>
      </label>
      <label for="c3">
        <input id="c3" type="radio" name="option" value="${questionList[question].ans3}">
        <span>${questionList[question].ans3}</span>
      </label>
      <label for="c4">
        <input id="c4" type="radio" name="option" value="${questionList[question].ans4}">
        <span>${questionList[question].ans4}</span>
      </label>
      </fieldset>
  
  <section>
    <div>
    <input id="ans-submit" type="submit" value="Submit">
    </div> 
  </section>
  </form>  `
};

function runQuiz() {
  $('.startButton').click(function (event) {
    $('main').hide();
    $('.questionDisplay').html(questionSnippet());
    console.log('Transition to question page successful.');
    statusBar();
    userInputHandler();
    nextQuestHandler();
  });
};

//Current question number and score.
function statusBar() {
  questionCount++;
  $('.question-count').html(questionCount);
  console.log("Status Bar update successful.");
};

// Check user's answer
function userInputHandler() {
  $(document).on('submit', 'form', function (event) {
    var userInput = $('input[name="option"]:checked').val();
    event.preventDefault();
    $('form').hide(questionSnippet());
    console.log("clicked");
    console.log($('input[name="option"]:checked').val());
    console.log(questionList[questionCount-1].correctAns);
    
 //Calling correct user feedback
    if (questionList[questionCount-1].correctAns === userInput) {
      $('.questionDisplay').html(correctFeedack());
      score++;
      $('.score').html(score);
    } else {
      $('.questionDisplay').html(incorrectFeedback());
    };

  });

};

function nextQuestHandler() {
  $(document).on('click','#next-button', function () {
  $('.feedback-page').hide();
  if (questionCount < 10 ) {
    $('.questionDisplay').html(questionSnippet(question++));
    statusBar();
  } else {   
    $(".feedback-page").remove();
    $('.questionDisplay').html(`
    <section class="result-page">
    <h1>Your final score is ${score} / 10.</h1>
    <button class="restart-button" type="button">Restart</button>
    </section>`
  );
    console.log('Result generated.');
  };
  });
};

function restartPage() {
  $(document).on('click','.restart-button', function() {
      location.reload();
    })
  // $(document).on('click','.restart-button', function() {
  //   questionCount = 0;
  //   score = 0;
  //   $('.question-count').html(questionCount);
  //   $('.score').html(score);
  //   console.log('Restart buttion triggered.')
  //   $('.result-page').remove();
  //   $('main').show();
  // });
};

function correctFeedack() {
  return `
    <section class="feedback-page" role="main">
      <h2>You're right.</h2>
      <h2>${questionList[questionCount-1].correctAns}</h2>
      <button type="button" id="next-button">Next</button>
    </section >
    `;
};

function incorrectFeedback() {
  return `
    <section class="feedback-page" role="main">
      <h2>Incorrect.</h2>
      <h2>${questionList[questionCount-1].correctAns}</h2>
      <button type="button" id="next-button">Next</button>
    </section >
    `;
};


$(function () {
  runQuiz();
  restartPage();
});

