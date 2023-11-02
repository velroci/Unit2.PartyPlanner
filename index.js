///test listener 
let idCounter=0;
const input= document.querySelector('input[type="text"]');


userInput.addEventListener('submit',(event)=>{
    event.preventDefault();
    addTask();

    //console.log('new event submit'); test
});
let addTask =()=>{
    idCounter++;
    let newValue= input.value;
    let newValuename=input.value;

    list.innerHTML+=`<div class="task-container" id="${idCounter}">
    <td>
        ${newValue}
    </td>
    <input type="checkbox">
    <img src="delete.png" class="closeBtn">

</div>`

input.value='';
updateStats();
};

list.addEventListener('click',(Event)=>{

if(Event.srcElement.nodeName=='INPUT'){
    updateStats();
}else if(Event.srcElement.nodeName=='IMG'){
    deleteTask(Event.srcElement.parentNode.id);
}
  });


let updateStats=()=>{
    let element=list.querySelectorAll('div');
    let checkbox= list.querySelectorAll('input[type="checkbox"]:checked');

    stats.innerHTML=`<p>Parties pendientes: ${element.length} completas:${checkbox.length}</p>`
    
};

let deleteTask =(id)=>{
    let taskToDelete=document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}



