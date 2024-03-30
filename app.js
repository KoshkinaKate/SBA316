document.addEventListener("DOMContentLoaded", function() {
    let addToDoButton = document.querySelector('#addToDo');
    let inputField = document.querySelector('#inputField');
    let toDoContainer = document.getElementById('toDoContainer');
    let messageElement = document.getElementById('message');

    addToDoButton.addEventListener('click', function(){
        let task = inputField.value.trim();
        if (task !== '') {
            let paragraph = document.createElement('p');
            paragraph.classList.add('paragraph-styling');
            paragraph.innerText = task;
            toDoContainer.appendChild(paragraph);
            inputField.value = "";
            
            paragraph.addEventListener('click', function(){
                paragraph.style.textDecoration = "line-through";
                // paragraph.style.backgroundColor = 'lightgray';
            });

            paragraph.addEventListener('dblclick', function(){
                toDoContainer.removeChild(paragraph);
                // messageElement.textContent = "Task removed!";
            });
            let tasks = document.querySelectorAll('.paragraph-styling');
            // Clear the container
            toDoContainer.innerHTML = '';
            // Reattach each task from the fragment to the container
            for (let i = 0; i < tasks.length; i++) {
                toDoContainer.appendChild(tasks[i].cloneNode(true));
                // Reattach event listeners to the cloned task
                let clonedTask = toDoContainer.lastChild;
                clonedTask.addEventListener('click', function(){
                    clonedTask.style.textDecoration = "line-through";
                    // clonedTask.style.backgroundColor = 'lightgray';
                });
                clonedTask.addEventListener('dblclick', function(){
                    toDoContainer.removeChild(clonedTask);
                    messageElement.textContent = "Task removed!";
                });
            }
            
            
        } else {
            alert('Ooops! You forgot to enter a movie!');
        }
    });
    // Use BOM property
    inputField.addEventListener('input', function() {
        if (inputField.value.trim() === '') {
            inputField.style.border = '1px solid black';
            inputField.style.borderRadius = ''; 
        } else {
            inputField.style.border = '2px solid red';
            inputField.style.borderRadius = '16px';
            inputField.style.borderColor = '#831431';
            
        }
    });
});
