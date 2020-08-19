document.querySelector('.get-jokes').addEventListener('click', getJokes);
let value = document.querySelector('.jokes');
let wait = document.querySelector('.wait');
function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    e.preventDefault();
    wait.innerHTML = 'Fecthing Jokes..... <hr>'
    fetch(`http://api.icndb.com/jokes/random/${number}`)
    .then(response => response.json())
    .then(data => {
        let output = ``;
        wait.innerHTML = null;
        data.value.forEach(function(joke){
            output += `<li class="card">${joke.joke}</li>`;
          });
          wait.innerHTML = 'Jokes <hr>';
          value.innerHTML = output;
    })
    .catch(err => console.log(err))
}