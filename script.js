var sidemenu = document.getElementById("sidemenu");
var cardsper_page = 4;
var num = 0

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

var work_all = document.getElementsByClassName("work-row");

function opentab(tabname, int) {

    for (var work of work_all) {
        work.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");

}

function displayPage(int){
    num = num + int
    end = num * cardsper_page
    start = end - cardsper_page
    var active_tab = document.getElementsByClassName('active-tab');
    
    var workCards = active_tab[0].getElementsByClassName("work");
    var totalWorkCards = workCards.length;

    if (workCards.length > cardsper_page){
        for (card of workCards){
            card.style.display = 'none'
        }
        workCards[start].style.display = ''
        workCards[start + 1].style.display = ''
        workCards[start + 2].style.display = ''
        workCards[start + 3].style.display = ''
    }
}