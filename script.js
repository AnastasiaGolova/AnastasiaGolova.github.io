// define variables
const facts = ['worked in a molecular biology lab', 'was a TA of a bioinformatic course', 'taught biology and chemistry', 'draw on a tablet', 'live in Haifa', 'learn coding on my own', 'speak Chinese'];
const falseFact = facts[6];
const infoForFacts = [`That's true. After I got a degree in biochemistry I worked in a science lab for 4 years.`,
`That's true. When I was working at Skoltech in a bioinformatic lab, I was the TA and even taught several lectures on omics data analisys.`,
`That's true. I taught IB DP biology and chemistry for 2 years.`,
`That's true. I love drawing on iPad in Procreate. I even have a <a id="behance">behance profile</a> with my illustrations. You can check it out if you want.`,
`That's true. My husband and I are living in Haifa, Israel for more than a year. Before we lived in Moscow, Russia.`,
`That's true. I started learning coding in 2019, because I wanted to try bioinformatics. I learned some Python and R back then. I used them for genome data analysis. After I quit my job in a bioinformatic lab, I had a break in coding. This May I decided that I want to be a front-end developer, and started learning on Codecademy. I'm on 64% of Front-end Engineer career path right now.`,
`Congrats! You guessed right! I don't speak Chinese. I speak Russian, English and a bit Spanish.`];
let memory = [];
const container = document.getElementById('facts');
const additionalFacts = document.getElementById('additionalFacts');
const description = document.createElement('p');
const tryAgainButton = document.createElement('button');
const closeButton = document.createElement('button');

// fill div "facts" with buttons contaning facts in random order
const fillWithButtons = () => {
    while (memory.length < 7){
        const indexRandom = Math.floor(Math.random()*7);
        if (!memory.includes(indexRandom)){
            memory.push(indexRandom);
            container.innerHTML += `<button id="button">${facts[indexRandom]}</button>`; 
        }  
    }
    memory = [];  
}

// Call the function to fill div container with buttons
fillWithButtons();
// define an array of buttons
let buttons = container.getElementsByTagName('button');



// append additional elements and set there status
additionalFacts.appendChild(description);
additionalFacts.appendChild(tryAgainButton);
additionalFacts.appendChild(closeButton);
description.hidden = true;
tryAgainButton.hidden = true;
closeButton.hidden = true;
tryAgainButton.style.margin = 0;
tryAgainButton.style.padding = 0;
closeButton.style.margin = 0;
closeButton.style.padding = 0;

// Function that color a button in green if the fact is true or in red if the fact is false
const trueFact = (e) => {
    e.preventDefault();
    if (e.target.innerHTML !== falseFact){
        e.target.style.backgroundColor = '#1CC92B'
    } else {
        e.target.style.backgroundColor = '#E83E38'
    }
    if (e){
        for (let i = 0; i < buttons.length; i++){
            buttons[i].removeEventListener('click', trueFact)
        }  
    }
    description.hidden = false;
    // show some additional facts supporting the clicked fact
    switch(e.target.innerHTML){
        case facts[0]:
            description.innerHTML = infoForFacts[0];
            createTryAgainButton();
            break;
        case facts[1]:
            description.innerHTML = infoForFacts[1];
            createTryAgainButton();
            break;
        case facts[2]:
            description.innerHTML = infoForFacts[2];
            createTryAgainButton();
            break;
        case facts[3]:
            description.innerHTML = infoForFacts[3];
            document.getElementById('behance').href = 'https://www.behance.net/nastasiagolova';
            document.getElementById('behance').target = '_blank';
            createTryAgainButton();
            break;
        case facts[4]:
            description.innerHTML = infoForFacts[4];
            createTryAgainButton();
            break;
        case facts[5]:
            description.innerHTML = infoForFacts[5];
            createTryAgainButton();
            break;
        case facts[6]:
            description.innerHTML = infoForFacts[6];
            createCloseButton();
            break;
    } 
}

// Function that creates Try again button
const createTryAgainButton = () => {
    tryAgainButton.hidden = false;
    tryAgainButton.innerHTML = 'Try again';
    tryAgainButton.style.padding = '1rem';
    tryAgainButton.addEventListener('click', returnState);
    tryAgainButton.addEventListener('click', removeButtons);
    
}

// Function that creates Close button
const createCloseButton = () => {
    closeButton.hidden = false;
    closeButton.innerHTML = 'Close';
    closeButton.style.padding = '1rem';
    closeButton.addEventListener('click', returnState);
    closeButton.addEventListener('click', removeButtons);
}

// Function that return the initial state of buttons
const returnState = () => {
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = '#f3d385';
    }
    description.hidden = true;
    tryAgainButton.hidden = true;
    tryAgainButton.innerHTML = '';
    closeButton.hidden = true;
    closeButton.innerHTML = '';
    tryAgainButton.style.padding = 0;
    closeButton.style.padding = 0;
    fillWithButtons();
    // add event listeners to all buttons
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', trueFact);
    }
}

// remove buttons with facts before the next round to get them in a new order
const removeButtons = () => {
    let count = 0;
    while (count < 7){
        document.getElementById('button').remove();
        count += 1;
    }
}
 
 // add event listeners to all buttons
 for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', trueFact);
 }






