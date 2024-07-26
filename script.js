var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

var work_all = document.getElementsByClassName("work-row")

function opentab(tabname){
    for (work of work_all){
        work.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-tab")
    document.getElementById(tabname).classList.add("active-tab")
}