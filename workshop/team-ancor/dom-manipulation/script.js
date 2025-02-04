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
const formResponse = document.getElementById('section1');

let name = "";
const formSection = document.getElementById("section3")

let overlay = document.createElement("div");
overlay.id = "overlay";

document.addEventListener("DOMContentLoaded", function(){
   

    formSection.style.position = "fixed";
    formSection.style.top = "40%";
    formSection.style.left = "50%";
    formSection.style.transform = "translate(-50%, -50%)";
    formSection.style.background = "white";
    formSection.style.padding = "30px 40px 30px 20px";
    formSection.style.border = "2px solid black";
    formSection.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
    formSection.style.zIndex = "1000";
    formSection.style.display = "block";


    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "999"; 
    document.body.appendChild(overlay);
})

let errorMessage = document.createElement('p')
errorMessage.style.color = 'red'
errorMessage.style.fontSize = "14px"
errorMessage.style.marginTop = "10px"
form.appendChild(errorMessage)


  

form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    overlay.style.display = "none"
    const formName = document.getElementById('name').value.trim();
   
    const feedback = document.getElementById('feedback').value.trim();
    if (formName === "" || feedback === "") {
        errorMessage.textContent = "Please fill out all fields before submitting.";
        return; 
    }

      formSection.style.display = "none"
    
    name = formName;
    formResponse.textContent = `Thank you, ${name}, for your feedback: "${feedback}"`;
  

   
    form.reset();
    errorMessage.textContent = ""
});





/* PROMPTS FOR ADDITIONAL INTERACTIONS

Issue 1. Add functionality to highlight the navigation link of the current section as the user scrolls.
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
