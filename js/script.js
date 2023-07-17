function changeText() {
    //todo talk: this is front end script
    let potentialTexts = ['text1', 'text2', 'text3', 'text4', 'text5'];
    let randomNumber = getRandomNumberBetween(0, potentialTexts.length - 1);
    let textToChangeTo = potentialTexts[randomNumber];
    //tofo put textToChangeTo on the html page!
    document.getElementById('heading').innerHTML = textToChangeTo;
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}