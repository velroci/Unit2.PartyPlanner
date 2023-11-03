///test listener 
///first declare to variables call to html
//GET DATA 
let idCounter = 0;
const input = document.querySelector('#names');
const inputDate = document.querySelector('#dates');
const inputtimes = document.querySelector('#timess');
const textareaAdress = document.querySelector('#address');
const textDescrip = document.querySelector('#Description');

userInput.addEventListener('submit', (event) => {
    event.preventDefault();///
    addTask();

    //console.log('new event submit'); test
});
//
let addTask = () => {
    idCounter++;//count Id

    let newValue = input.value;
    let newValuedates = inputDate.value;
    let newValueTimes = inputtimes.value;
    let newAdress = textareaAdress.value;
    let newDescription = textDescrip.value;
//POST add new elemt 

    list.innerHTML += `<div class="task-container" id="${idCounter}">
    <label >NAME:</label>
    <td>
        ${newValue}
    </td>
    <label>DATE:</label>
    <td>
    ${newValuedates}
    </td>
    <label>TIME:</label>
    <td>
    ${newValueTimes}
    </td>
    <label>ADDRESS:</label>
    <td>
    ${newAdress}
    </td>
    <label>DESCRIPCION:</label>
    <td>
    ${newDescription}
    </td>



    <input type="checkbox">
    <img src="delete.png" class="closeBtn">

</div>`
///clear for a new event
    input.value = '';
    inputDate.value ='';
    inputtimes.value= '';
    textareaAdress.value='';
    textDescrip.value='';


    updateStats();


};
///add new event and update
list.addEventListener('click', (Event) => {

    if (Event.srcElement.nodeName == 'INPUT') {
        updateStats();
    } else if (Event.srcElement.nodeName == 'IMG') {
        deleteTask(Event.srcElement.parentNode.id);
    }
});
//update 
//count length 
//
let updateStats = () => {
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');

    stats.innerHTML = `<p>:Pending Events ${element.length} Complete:${checkbox.length}</p>`

};
///DELETE
let deleteTask = (id) => {
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}



