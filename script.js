let inputValue=document.querySelector('.input-text');
let add=document.querySelector('.add-btn');
let msg=document.querySelector('.msg');
let data=document.querySelector('.data');
let task=document.querySelector('.task');

function formValidation(){
    if (inputValue.value==""){
        msg.innerHTML="Please input something";
    }else{
        msg.innerHTML="";
        acceptData();
        console.log('Success');
        
    }
}
add.addEventListener("click",function(e){
    e.preventDefault();
    formValidation();
})
let inputData={};

function acceptData(){
    inputData.text=inputValue.value;
    task.innerHTML+=`
   <div class="task1">
    <p class="data" >${inputData.text}</p>
    <center>
        <div class="icon">
            
            <i class="fa-solid fa-trash" onClick="deletTask(this)" ></i>
        </div>
    </center>
   </div><br>
</div></div>`;//The this keyword will refer to the element that fired the event. in our case, the this refers to the delete button.
   inputValue.value="";
}
function deletTask(e){
      e.parentElement.parentElement.parentElement.remove(); // the parent element of delete button is .icon and icon parent element is .task1 and task1 parent element is task so, we write .parentElement thrice
}



