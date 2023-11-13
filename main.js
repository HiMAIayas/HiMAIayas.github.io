

let buttonList = document.querySelectorAll(".toggle-button");
console.log(buttonList);
buttonList.forEach((element)=>{
    //console.log(element.id);
    element.addEventListener('click',function(){
        toggleShow(element.id);
    });
})


function toggleShow(id){
    let ul = document.getElementById(id+"-ul");
    let button = document.getElementById(id);
    //console.log(button.innerHTML);
    if (button.innerHTML=="&gt;"){ // "&gt;" = ">"
        ul.style.display = "block";
        button.innerHTML = "v";
    }
    else {
        ul.style.display = "none";
        button.innerHTML = ">";
    }
}