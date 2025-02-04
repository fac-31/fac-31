// Enable button jumping
const jumpingButton = document.getElementById('btn-toggle1');
const hiddenInfo = document.querySelector('.hidden-info');
const sectionOneHeading = document.querySelector("#section1 > h2");
const sectionOneParagraph = document.querySelector("#section1 > p");
sectionOneHeading.innerText = "Press the button below for a fun surprise!";
sectionOneHeading.style.fontSize = "28px";
sectionOneParagraph.innerText = "";

jumpingButton.innerText = 'PRESS ME';
jumpingButton.style.borderRadius = "100%";
jumpingButton.style.color = "beige";
jumpingButton.style.fontSize = "20px";
jumpingButton.style.height = "100px";
jumpingButton.style.width = "100px";
jumpingButton.style.backgroundImage = "radial-gradient(#ad1818 55%, #000000)";
jumpingButton.style.display = "block";
jumpingButton.style.margin = "auto";
document.getElementById("section1").style.textAlign = "center";

jumpingButton.onmouseenter = () => {
    jumpingButton.style.position = "absolute";
    jumpingButton.style.top = `${Math.floor(Math.random() * 1000)}px`;
    jumpingButton.style.left = `${Math.floor(Math.random() * 1000)}px`;
};

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
    formResponse.textContent = `Thank you, ${name}, for your feedback: "${feedback}"`;
    form.reset();
});

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

//Sefi - Change text on hover.
//TODO when time permits: initiliaze all relevant elements and event listeners in a single function.
const section1Title = document.getElementById('section1Title');
const section2Title = document.getElementById('section2Title');
const section3Title = document.getElementById('section3Title');
let originalTexts = [section1Title.innerText, section2Title.innerText, section3Title.innerText]
section1Title.addEventListener('mouseenter' , (event) => { OnMouseEnter(0, event);})
section1Title.addEventListener('mouseleave',  (event) => { OnMouseLeave(0, event);})
section2Title.addEventListener('mouseenter' , () => { OnMouseEnter(1);})
section2Title.addEventListener('mouseleave',  (event) => { OnMouseLeave(1, event);})
section3Title.addEventListener('mouseenter' , () => { OnMouseEnter(2);})
section3Title.addEventListener('mouseleave',  (event) => { OnMouseLeave(2, event);})

function OnMouseEnter(index)
{
    let anagram = AnagramizeText([...originalTexts[index]]);
    event.target.innerText = anagram.join('');
}

function OnMouseLeave(index, event)
{
    event.target.innerText = originalTexts[index];
}

//The Fisher-Yates (Knuth) Shuffle algorithm
function AnagramizeText(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}