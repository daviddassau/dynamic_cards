
var cardNumber = 0;

// Variable to get main 'mainContainer' div
var mainContainerDiv = document.getElementById('mainContainer');
// 
var createBTN = document.getElementById('createButton');


function domString() {
	var userInputText = document.getElementById('inputText').value;
	cardNumber++;
	var card = '';
		card += '<div id="mainCard' + cardNumber + '">';
		card += '<div class="userInput">' + userInputText + '</div>';
		card += '<div><button id="clearButton" onclick="removeCard(' + cardNumber + ')">Delete</button></div>';
		card += '</div>';

	writeToDom(card);
}


// Function to write content to page
function writeToDom(stringToDom){
	mainContainerDiv.innerHTML += stringToDom;
}

// When button is clicked, content is displayed on page
createButton.addEventListener('click', function(){
	domString(mainContainerDiv);
});



function removeCard(card){
    document.getElementById("mainCard" + card).remove();
}














