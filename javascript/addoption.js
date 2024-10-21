var inputArea = document.getElementById("inputarea");
var addButton = document.querySelectorAll("#addbtn");


function addDynamicWidthListener(input, container) {
    input.addEventListener('keyup', function() {
        var newSize = this.value.length;
        container.style.width = (newSize + 1) + 'em'; // Ensure container width matches input
    });
}

// Function to create delete button
function createDeleteButton(container) {
    var deleteButton = document.createElement("a");
    deleteButton.innerHTML = "&times;";
    deleteButton.href = "";
    deleteButton.classList.add("deletebtn");
    deleteButton.addEventListener("click", (event) => {
        event.preventDefault();
        inputArea.removeChild(container);
    });
    return deleteButton;
}

// Apply dynamic width adjustment to existing inputs on page load
document.addEventListener('DOMContentLoaded', function() {
    var existingInputs = document.querySelectorAll("#inputarea .opt");
    existingInputs.forEach(function(input) {
        var container = input.parentElement; // Get the parent container
        addDynamicWidthListener(input, container);
        var deleteButton = createDeleteButton(container);
        container.appendChild(deleteButton); // Add delete button to existing containers
    });
});

addButton.forEach(function(add) {
    add.addEventListener("click", (event) => {
        event.preventDefault();
        
        var inputContainer = document.createElement("div");
        inputContainer.classList.add("input-container");
        inputContainer.style.width = "3em"
    
        var input = document.createElement("input");
        input.type = "text";
        input.value = "選項";
        input.className = "opt";
        input.id = "dynamic-input"; // Consider using unique IDs if needed
        input.size = "1";
        input.style.width = "100%"
    
        // Add the dynamic width listener for the new input
        addDynamicWidthListener(input, inputContainer);
        
        // Create and add the delete button
        var deleteButton = createDeleteButton(inputContainer);
        
        inputContainer.appendChild(input);
        inputContainer.appendChild(deleteButton);
        inputArea.appendChild(inputContainer);
    });
})
