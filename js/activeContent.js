function activeDateContent (element){
    var options = document.getElementsByClassName('date-content');

for(var i = 0; i< options.length; i++){
    options[i].classList.remove("active-date-content");
}



element.classList.add('active-date-content')
}

/*select dates*/

function activeOption (element){
    var options = document.getElementsByClassName('nav-btn');

for(var i = 0; i< options.length; i++){
    options[i].classList.remove("active-option");
}



element.classList.add('active-option')
}

/**/

function activeSlot (element){
    var options = document.getElementsByClassName('time-slot-select-div');

for(var i = 0; i< options.length; i++){
    options[i].classList.remove("active-slot");
}



element.classList.add('active-slot')
}

/**/
function activateNav(element) {
    var navButtons = document.getElementsByClassName("times");
    for (var i = 0; i < navButtons.length; i++) {
        navButtons[i].classList.remove("active-time");
    }
   



    element.classList.add("active-time");
}

/**/
function activeDate(element) {
    var dateBtn = document.getElementsByClassName('date-content');
    for (var i = 0; i < dateBtn.length; i++) {
        dateBtn[i].classList.remove('active-date');
    }

    element.classList.add("active-date");
}