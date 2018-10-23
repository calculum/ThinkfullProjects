


const questionList = [
  {
    number: 1,
    text: `The process of burning of municipal solid waste at high temperature is called______`,
    ans1: `Incineration`,
    ans2: `Composting`,
    ans3: `Land filing`,
    ans4: `Shredding`,
    correctAns: 'Incineration',
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

let choiceAns = 0;

function questionSnippet() {
  return `
  <form>
    <fileldset>
    <h1 id="question-page" role="main">${questionList[choiceAns].text}</h1>
    <fieldset>
      <label for="choice">
        <input class="user-choice" type="radio" name="option" required>
        <span>${questionList[choiceAns].ans1}</span>
      </label>
      <label for="choice">
        <input class="user-choice" type="radio" name="option">
        <span>${questionList[choiceAns].ans2}</span>
      </label>
      <label for="choice">
        <input class="user-choice" type="radio" name="option">
        <span>${questionList[choiceAns].ans3}</span>
      </label>
      <label for="choice">
        <input class="user-choice" type="radio" name="option">
        <span>${questionList[choiceAns].ans4}</span>
      </label>
      </fieldset>
  </form>
  <section>
    <div>
    <button id="quest-submit" type="submit">Submit</button>
    </div> 
  </section>
    `
};

function quizStart() {
  $('.startButton').click(function (event) {
    event.preventDefault();
    $('main').hide();
    $('.questionDisplay').html(questionSnippet());
    handleStatusBar();
  });

};

function handleStatusBar() {
  var questionCount = $('.question-count').val();
  questionCount++;
  console.log("StatusBarUp");
};


function checkAnswer() {

};


function handleQuestSubmit() {
  $('#quest-submit').click(function () {

  });
};

function handleNextButton() {

};


function correctFeedack() {
  const correctFeedback = `
    < section class="feedback-page" role="main">
      <h2>You're right.</h2>
      <h2>${questionList[choiceAns].correctAns}</h2>
      <button type="submit" id="next-button">Next</button>
    </section >
    `;
  correctFeedack(correctFeedback);
};

function incorrectFeedback() {
  const incorrectFeedback = `
    < section class="feedback-page" role="main">
      <h2>Incorrect.</h2>
      <h2>${questionList[choiceAns].correctAns}</h2>
      <button type="submit" id="next-button">Next</button>
    </section >
    `;
  incorrectFeedback(incorrectFeedback);
};

quizStart();

