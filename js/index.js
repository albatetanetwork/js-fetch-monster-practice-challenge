const BASE_URL = "http://localhost:3000/";

//1.Get the relavant data

function getMonsters(page) {
    const url = `${BASE_URL}monsters/?_limit=50&_page=${page}`;
return fetch(url)
.then(resp => resp.json())

}
const monsters = getMonsters();
// console.log(monsters);
// getMonsters(1).then(data => console.log(data));
//2.Create a componeent with the data
/* <div>
      <h2>Monster Name1</h2>
      <h3>Monster Age1</h3>
      <p>About the Monster2:</p>
</div> */

function createMonstersDiv(monsterObj) {
    const div = document.createElement('div'),
    h2 = document.createElement('h2'),
    h3 = document.createElement('h3'),
    p = document.createElement('p');

    h2.textContent = monsterObj.name;
    h3.textContent = monsterObj.age;
    p.textContent = monsterObj.description;

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    
    return div;
}

/* <div id='monster-container'>
    <div>
      <h2>Monster Name</h2>
      <h3>Monster Age</h3>
      <p>About the Monster</p>
    </div>
  </div> */

function showMonsters(monstersArray) {
    const monsterContainer = document.getElementById('monster-container');
    monstersArray.forEach(monsterObj => {
        const monsterDiv = createMonstersDiv(monsterObj);
    monsterContainer.appendChild(monsterDiv);
        
    });

// return showMonsters(monstersArray);
}


getMonsters(1)
.then(monstersArray => showMonsters(monstersArray));