const taskInput = document.getElementById('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

const arr = [];


form.addEventListener('submit', (e)=>{

    
    const value = taskInput.value;

    if(value == ""){
        alert('Please type a task');
    }

    else{
        const li = document.createElement('li');

        li.innerHTML = `${value}
        <i class="far fa-edit"></i>
        <i class="fas fa-times"></i>`
        
        ul.append(li);
        arr.push(li);

    }
    
    otherFunctions();

    taskInput.value = "";
    
    e.preventDefault();
});

function otherFunctions(){
    const icons = document.querySelectorAll('i');

    icons.forEach((icon)=>{
        icon.addEventListener('click', (e)=>{
            if(e.target.classList.contains('fa-times')){
                arr.pop(e.target.parentElement);
                e.target.parentElement.remove();
                otherFunctions();
            }
            else if(e.target.classList.contains('fa-edit')){

                let newInput = prompt('Please write the updated task');

                if(newInput === null){
                    newInput = "";
                }
                    e.target.parentElement.innerHTML = `${newInput}
                    <i class="far fa-edit"></i>
                    <i class="fas fa-times"></i>`;
                    otherFunctions();
            }
            else if(e.target.classList.contains('fa-sort-up')){
                console.log(arr);
            }


            
        })
    })
}


