
const input =document.querySelector('#task-input');
const submit=document.querySelector('#submit');
const list=document.querySelector('.taskfield');


submit.addEventListener('click', (e)=>{
    input.focus();
    let res=input.value;
    
    e.preventDefault();
    let newitem=document.createElement('div')
    newitem.classList.add("task-holder");
    
    let newTaskitem=document.createElement('div');
    newTaskitem.classList.add("task");
    newitem.appendChild(newTaskitem);
    
    let inputTask=document.createElement('input');
    inputTask.setAttribute('readonly','readonly')
    inputTask.classList.add("task-list")
    inputTask.setAttribute('value',res);
    newTaskitem.appendChild(inputTask);

    let newActionitem=document.createElement('div');
    newActionitem.classList.add("action");
    newitem.appendChild(newActionitem);

    let editbtn = document.createElement('button');
    editbtn.innerText='Edit';
    editbtn.classList.add('edit');

    let delbtn = document.createElement('button');
    delbtn.innerText='Delete';
    delbtn.classList.add('delete');

    let donebtn = document.createElement('button');
    donebtn.innerText='Done';
    donebtn.classList.add('done');

    newActionitem.appendChild(editbtn);
    newActionitem.appendChild(delbtn);
    newActionitem.appendChild(donebtn);
    
    

    list.appendChild(newitem);
    input.value="";
    

    editbtn.addEventListener('click',()=>{
        if(editbtn.innerHTML=='Edit'){
            inputTask.removeAttribute('readonly');
            inputTask.focus();
            editbtn.innerHTML="Save";
            inputTask.classList.add('active');
        }else{
            inputTask.setAttribute('readonly','readonly');
            editbtn.innerHTML="Edit";
            inputTask.classList.remove('active');
        }
        
    })
    delbtn.addEventListener('click',(e)=>{
        newitem.remove();
    })
    donebtn.addEventListener('click',()=>{
        inputTask.classList.add('active');
    })
});

function Tdate(){
    let date = new Date();
    let DD=date.getDay();
    let MM=date.getMonth()+1;
    let YY=date.getFullYear();
    let day= DD +"/"+ MM +"/"+YY ;
    document.querySelector(".a").innerText=day;
}
Tdate();

function Ttime(){
    let date = new Date();
    let HH=date.getHours();
    let MM=date.getMinutes();
    let SS=date.getSeconds();
    let time= HH +":"+ MM +":"+SS;
    document.querySelector(".b").innerText=time;
    setTimeout(Ttime,1000)
}
Ttime();