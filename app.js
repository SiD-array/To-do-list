const input = document.querySelector("#task");
const btn = document.querySelector("#btn");
const listContainer = document.querySelector(".list-container")

btn.addEventListener("click", (evt) =>{
    evt.preventDefault();
    let task = input.value;
    if(task===""){
        alert("You must write something to add!!");
    } 
    else{
        let li = document.createElement("li");
        li.innerText = task;
        listContainer.append(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
});

listContainer.addEventListener("click", (evt) =>{
    if(evt.target.tagName === "LI"){
        evt.target.classList.toggle("checked");
        saveData();
    }
    else if(evt.target.tagName === "SPAN"){
        evt.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();