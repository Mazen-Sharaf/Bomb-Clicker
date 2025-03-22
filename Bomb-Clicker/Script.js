const clickButton = document.querySelector(".Button");
const counter = document.querySelector(".Counter");
const reset = document.querySelector(".reset-button");


let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;
counter.textContent = `Kills: ${count}`;

clickButton.addEventListener('click', () => {
    count++;
    counter.textContent = `Kills: ${count}`;
    localStorage.setItem('count', count);
    if (count === 100) {
        window.alert('You are a killer');
    }
});

reset.addEventListener('click', () => {
    count = 0;
    counter.textContent = `Kills: ${count}`;
    localStorage.setItem('count', count);
    console.log('Counter has been reset!');
});
