// Toggle hidden information
const toggleButton = document.getElementById('btn-toggle1');
const hiddenInfo = document.querySelector('.hidden-info');

toggleButton.addEventListener('click', () => {
    hiddenInfo.classList.toggle('hidden-info');
});

// Change background color of the box
const colorButton = document.getElementById('btn-change-color');
const colorBox = document.getElementById('color-box');

colorButton.addEventListener('click', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
});

// Form submission handling
const form = document.getElementById('feedback-form');
const formResponse = document.getElementById('form-response');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
    const button = document.querySelector('button[value=Submit]');
    if(!name || !feedback) {
        alert("Name or feedback cannot be empty! :)")
    } else {
    const checker = new FormData(form, button)
    for (const [key, value] of checker) {
        formResponse.innerText += `${key}: ${value}\n`;
    }
    form.reset();
    }
});
// joke api 
let sec3 = document.getElementById('section3');
let jokeDiv = document.createElement('div');
jokeDiv.id = "joker";
jokeDiv.style.padding = '5px';
sec3.appendChild(jokeDiv);
let jokeButt = document.createElement('button');
jokeButt.innerText = 'Tell me a joke';
jokeButt.style.width = '100%'
sec3.appendChild(jokeButt);

async function jokeList(){
    let response = await fetch('https://gist.githubusercontent.com/cynthiateeters/7acb6e858cd803835f917bb7572deeaf/raw/e3bb03b6773f58bd8c66073f9ef5757479725236/jokes.json')
    let jokes = await response.json()
    return jokes
}
function jokeFunc() {
    return jokeList().then((jokes) => {
    let len = jokes.length;
    let random = Math.floor(Math.random() * len);
    jokeDiv.style.border = 'black solid 2px'
    jokeDiv.innerText = jokes[random].joke
})
}
jokeButt.addEventListener('click',jokeFunc)

/* PROMPTS FOR ADDITIONAL INTERACTIONS

1. Add functionality to highlight the navigation link of the current section as the user scrolls.
2. Implement a light/dark mode toggle using CSS root variables.
3. Create a dynamic list where users can add and remove items.
4. Add validation to the feedback form to ensure name and feedback are not empty.
5. Use localStorage to save the user's name for personalized greetings.
6. Animate the color change of the box with a smooth transition.
7. Display a live character counter for the feedback textarea.
8. Implement drag-and-drop functionality for rearranging items in a list.
9. Add a countdown timer to a section, resetting after it reaches zero.
10. Fetch and display data from a public API (e.g., random jokes or quotes).

*/
