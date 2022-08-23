/*%%%%%%%%%%%%%%% select the best Player part start %%%%%%%%%%%%%%%%%*/

function playersNameWithId(playersBtnId, playersNameId) {
    document.getElementById(playersBtnId).addEventListener('click', function () {
        const nameOfPlayers = document.getElementById(playersNameId);
        const PlayerName = nameOfPlayers.innerText;
        const setOfTheButton = document.getElementById(playersBtnId);
        setOfTheButton.setAttribute('disabled', '');
        document.getElementById(playersBtnId).style.backgroundColor = 'gray';

        const setOfThePlayersName = document.getElementById('player-name-list');
        const li = document.createElement('li');
        li.innerText = PlayerName;
        const lengthSize = selectPlayers();
        if (lengthSize >= 5) {
            alert('Sorry! You Can select only five Players!');
            document.getElementById(playersBtnId).style.backgroundColor = 'teal';
            return;
        }
        setOfThePlayersName.appendChild(li)
    })
}


playersNameWithId('btn-messi', 'messi');
playersNameWithId('btn-ronaldo', 'ronaldo');
playersNameWithId('btn-robert', 'robert');
playersNameWithId('btn-kylian', 'kylian');
playersNameWithId('btn-neymar', 'neymar');
playersNameWithId('btn-bruyne', 'bruyne');
playersNameWithId('btn-haaland', 'haaland');
playersNameWithId('btn-salah', 'salah');
playersNameWithId('btn-virgil', 'virgil');
/*%%%%%%%%%%%%%%% select the best Player part end %%%%%%%%%%%%%%%%%*/


/*%%%%%%%%%%%%%%% 5 players name part start %%%%%%%%%%%%%%%%%%%*/
function selectPlayers() {
    const listName = document.querySelectorAll('#player-name-list li');
    const selectPlayersName = [];
    for (const list of listName) {
        selectPlayersName.push(list);
    }

    const totalLength = selectPlayersName.length;
    return totalLength;
}
/*%%%%%%%%%%%%%%%%%%%%%%% 5 players name part end %%%%%%%%%%%%%%%%%%%*/


/*%%%%%%%%%%%%%%%%%%%%%%% calculate part start %%%%%%%%%%%%%%%%%%%%*/
function inputWithValueByid(valueOfId) {
    const placeOfInput = document.getElementById(valueOfId);
    const stringAndInput = placeOfInput.value;
    const amountOfInput = parseFloat(stringAndInput);
    if (isNaN(amountOfInput) || amountOfInput < 0) {
        alert('Opps! Wrong input .Please provide a valid number')
    }
    placeOfInput.value = '';
    return amountOfInput;
}

function getValueById(idOfElement) {
    const placeOfElement = document.getElementById(idOfElement);
    const stringAndElement = placeOfElement.innerText;
    const amountOfElement = parseFloat(stringAndElement);
    return amountOfElement;

}

function idWithElementValue(idOfElement, update) {
    const placeOfElement = document.getElementById(idOfElement);
    placeOfElement.innerText = update;
}


document.getElementById('btn-per-player').addEventListener('click', function () {
    const playersAmount = inputWithValueByid('player-field');
    const sizeOfAmount = selectPlayers();

    const totalAmount = sizeOfAmount * playersAmount;
    document.getElementById('total-expenses-player').innerText = totalAmount

})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const amountOfManager = inputWithValueByid('manager-field')
    const amountOfCoach = inputWithValueByid('coach-field')

    const managerAndCoachTotalAmount = amountOfManager + amountOfCoach;

    const playerExpensesAmount = getValueById('total-expenses-player')

    const totalAmount = managerAndCoachTotalAmount + playerExpensesAmount;
    idWithElementValue('balance-total', totalAmount);

})
/*%%%%%%%%%%%%%%%%%%%%%%% calculate part end %%%%%%%%%%%%%%%%%%%%*/