

const questionList = [
  {
    id: 1,
    question: `The process of burning of municipal solid waste at high temperature is called______`,
    answers: [`Incineration`, `Composting`, `Land filing`, `Shredding`], 
    correctAns: [0],
  },
  
  {
    number: 2,
    text: `Which of the following is a biodegradable waste?`,
    ans1: `Polythene bags`,
    ans2: `Synthetic fiber`,
    ans3: `Food waste`,
    ans4: `Paper`,
    correctAns: 'Polythene bags',
  },
  {
    number: 3,
    text: `In which method of disposal of municipal solid waste, the waste is dumped in the soil?`,
    ans1: `Incineration`,
    ans2: `Composting`,
    ans3: `Land filing`,
    ans4: `Shredding`,
    correctAns: 'Land filing',
  },
  {
    number: 4,
    text: `Which of the following is correct regarding disposal of waste by land filling?`,
    ans1: `Economical method`,
    ans2: `Preferred in low lying areas`,
    ans3: `Foul gases are not produced`,
    ans4: `Separation of different types of waste not required`,
    correctAns: 'Foul gases are not produced',
  },
  {
    number: 5,
    text: `The density of ash produced in the municipal solid waste is`,
    ans1: `100 kg/m<sup>3</sup>`,
    ans2: `450 kg/m<sup>3</sup>`,
    ans3: `700 kg/m<sup>3</sup>`,
    ans4: `1000 kg/m<sup>3</sup>`,
    correctAns: '700 kg/m<sup>3</sup>',
  },
  {
    number: 6,
    text: `The process of decomposition of biodegradable solid waste by earthworms is called`,
    ans1: `Land fills`,
    ans2: `Shredding`,
    ans3: `Vermi-composting`,
    ans4: `Composting`,
    correctAns: 'Vermi-composting',
  },
  {
    number: 7,
    text: `The waste produced in cotton mills are`,
    ans1: `Municipal solid waste`,
    ans2: `Non biodegradable waste`,
    ans3: `Hazardous waste`,
    ans4: `Non hazardous waste`,
    correctAns: 'Non hazardous waste',
  },
  {
    number: 8,
    text: `Which of the following is not the land filling method?`,
    ans1: `Bangalore method`,
    ans2: `Area method`,
    ans3: `Depression method`,
    ans4: `Trench method`,
    correctAns: 'Bangalore method',
  },
  {
    number: 9,
    text: `______ is a liquid that passes through solid waste and extract suspended impurities from it.`,
    ans1: `Leachate`,
    ans2: `Sludge`,
    ans3: `Distilled water`,
    ans4: `Municipal waste`,
    correctAns: 'Leachate',
  },
  {
    number: 10,
    text: `Which of the following is not the municipal solid waste?`,
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
        <input id="c1" class="user-choice" type="radio" name="option" required>
        <span>${questionList[question].answers[0]}</span>
      </label>
      <label for="c2">
        <input id="c2" class="user-choice" type="radio" name="option">
        <span>${questionList[question].answers[1]}</span>
      </label>
      <label for="c3">
        <input id="c3" class="user-choice" type="radio" name="option">
        <span>${questionList[question].answers[2]}</span>
      </label>
      <label for="c4">
        <input id="c4" class="user-choice" type="radio" name="option">
        <span>${questionList[question].answers[3]}</span>
      </label>
      </fieldset>
  
  <section>
    <div>
    <input id="ans-submit" type="submit" value="Submit">
    </div> 
  </section>
  </form>  `
};

function quizStart() {
  $('.startButton').click(function (event) {
    $('main').hide();
    $('.questionDisplay').html(questionSnippet());
    console.log('Transition to question page successful.');
    statusBar();

  });
};



function statusBar() {
  questionCount++;
  $('.question-count').html(questionCount);
  console.log("Status Bar number uodate successful.");
};

function socreBar() {
  if (correctFeedback === true) {
    socreBar++;
  } else {
    socreBar--;
  }
  $('.score').html(score);
  console.log('Score has changed.');
};

function checkAnswer() {
  
};




function handleAnsSubmit() {
  $(document).on('submit','form', function (event) {
    event.preventDefault();
    $('form').hide(questionSnippet());
    $('.questionDisplay').html(correctFeedack());
    
  });
};

function handleNextButton() {
  $('')
};


function correctFeedack() {
  return `
    <section class="feedback-page" role="main">
      <h2>You're right.</h2>
      <h2>${questionList[question].correctAns}</h2>
      <button type="button" id="next-button">Next</button>
    </section >
    `;
};

function incorrectFeedback() {
  return `
    < section class="feedback-page" role="main">
      <h2>Incorrect.</h2>
      <h2>${questionList[question].correctAns}</h2>
      <button type="button" id="next-button">Next</button>
    </section >
    `;
};


$(function () {
  quizStart();
  handleAnsSubmit();
  $(document).on('click','#ans-submit', function () {
    console.log("clicked");
    console.log($('input[name = option]:checked').val());
  });
});

