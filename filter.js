const filter_Container = document.querySelectorAll(".filter-container");
const contentFilter = document.querySelectorAll(".filter-div"); //all div with filter-div class


filter_Container.forEach((element)=>{
    //console.log(element.children);
    for (let child of element.children){
        child.addEventListener('click',function(){
            if (child.id=="all") showAll();
            else filter(child.id);
        });
    }
});

function filter(id){
    for (let element of contentFilter){
        let classList=element.classList;
        let hidden=true;
        for (let i=0; i<classList.length; i++){
            if (classList[i] == id+"F") {
                element.style.display = "block";
                hidden=false;
                break;
            }
        if (hidden) element.style.display = "none";
        }  
    }
}

function showAll(){
    contentFilter.forEach((element)=>{
        element.style.display="block";
    });
}