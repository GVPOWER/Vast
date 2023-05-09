// Assuming you have an HTML form with an input field, a submit button, and a feedback button

var userInput = document.getElementById('user-input');

var chatOutput = document.getElementById('chat-output');

var feedbackButton = document.getElementById('feedback-button');

// Function to handle form submission

function handleChat(event) {

  event.preventDefault();

  var userMessage = userInput.value;

  userInput.value = '';

  // Display the user message in the chat output

  var userMessageElement = document.createElement('p');

  userMessageElement.innerText = 'You: ' + userMessage;

  chatOutput.appendChild(userMessageElement);

  // Send the user message to the server for processing

  fetch('/get_response', {

    method: 'POST',

    headers: {

      'Content-Type': 'application/json',

    },

    body: JSON.stringify({ user_input: userMessage }),

  })

    .then(function (response) {

      return response.text();

    })

    .then(function (data) {

      // Display the bot's response in the chat output

      var botMessageElement = document.createElement('p');

      botMessageElement.innerText = 'Bot: ' + data;

      chatOutput.appendChild(botMessageElement);

    })

    .catch(function (error) {

      console.error('Error:', error);

    });

}

// Function to handle feedback submission

function handleFeedback() {

  var feedback = prompt('Please provide your feedback:');

  if (feedback) {

    // Send the feedback to the server for processing

    fetch('/submit_feedback', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json
