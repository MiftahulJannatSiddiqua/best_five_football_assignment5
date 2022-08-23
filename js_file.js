/*%%%%%%%%%%%%%%% select the best Player start %%%%%%%%%%%%%%%%%*/

function getPlayerNameVlueById(btnId, nameId) {
    document.getElementById(btnId).addEventListener('click', function () {
        const playerName = document.getElementById(nameId);
        const getPlayerName = playerName.innerText;

        const setButton = document.getElementById(btnId);
        setButton.setAttribute('disabled', '');
        document.getElementById(btnId).style.backgroundColor = 'gray';

        const setPlayerName = document.getElementById('player-name-list');
        const li = document.createElement('li');
        li.innerText = getPlayerName;
        const sizeOfLength = selectAllPlayer();
        if (sizeOfLength >= 5) {
            alert('You Can select only five Players!');
            document.getElementById(btnId).style.backgroundColor = 'teal';
            return;
        }
        setPlayerName.appendChild(li)
    })
}


getPlayerNameVlueById('btn-messi', 'messi');
getPlayerNameVlueById('btn-ronaldo', 'ronaldo');
getPlayerNameVlueById('btn-robert', 'robert');
getPlayerNameVlueById('btn-kylian', 'kylian');
getPlayerNameVlueById('btn-neymar', 'neymar');
getPlayerNameVlueById('btn-bruyne', 'bruyne');
getPlayerNameVlueById('btn-haaland', 'haaland');
getPlayerNameVlueById('btn-salah', 'salah');
getPlayerNameVlueById('btn-virgil', 'virgil');
/*%%%%%%%%%%%%%%% select the best Player end %%%%%%%%%%%%%%%%%*/