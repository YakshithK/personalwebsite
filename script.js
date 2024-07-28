var sidemenu = document.getElementById("sidemenu");
var cardsper_page = 4;

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

var work_all = document.getElementsByClassName("work-row");

function opentab(tabname) {
    for (var work of work_all) {
        work.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");

    // Get the active tab element
    var activeTab = document.getElementById(tabname);

    var workCards = activeTab.getElementsByClassName("work");
    var totalWorkCards = workCards.length;
    var totalPages = Math.ceil(totalWorkCards / cardsper_page);
}

