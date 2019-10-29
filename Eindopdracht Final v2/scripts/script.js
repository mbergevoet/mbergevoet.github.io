console.log("Gekoppelt");
var menuButton = document.querySelector("#hamburgerknop");
var unorderedList = document.querySelector("#mobielnavul");
var buttonOne = document.querySelector("#slideLeft1");
var buttonTwo = document.querySelector("#slideRight1");
var buttonThree = document.querySelector("#slideLeft2");
var buttonFour = document.querySelector("#slideRight2");
var buttonFive = document.querySelector("#slideLeft3");
var buttonSix = document.querySelector("#slideRight3");
var buttonSeven = document.querySelector("#slideLeft4");
var buttonEight = document.querySelector("#slideRight4");
var buttonNine = document.querySelector("#slideLeft5");
var buttonTen = document.querySelector("#slideRight5");

var knopZoeken = document.querySelector("#zoekenknop");
var knopZoekenAnnuleren = document.querySelector("#annuleerKnop");
var balkZoeken = document.querySelector("#zoekbalk");


function uitklappen(){
    unorderedList.classList.toggle("active");
}

function schuifUit(){
    balkZoeken.classList.remove("moveOut");
    balkZoeken.classList.add("moveIn");
}

function schuifIn(){
    balkZoeken.classList.remove("moveIn");
    balkZoeken.classList.add("moveOut");

}
//  Functions die geanimeerde horizontaal scrollende containers mogelijk maken met behulp van deze code:                                       http://jsfiddle.net/o4fkp7vr/

//buttonOne.onclick =
function scrollRight1() {
                var container = document.querySelector("#container1");
                scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    container.scrollLeft += 10;
                    scrollAmount += 10;
                    if(scrollAmount >= 700){
                        window.clearInterval(slideTimer);
                    }
                }, 5);
            };

function scrollLeft1() {
                var container = document.querySelector("#container1");
                scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    container.scrollLeft -= 10;
                    scrollAmount += 10;
                    if(scrollAmount >= 700){
                        window.clearInterval(slideTimer);
                    }
                }, 5);
            };

function scrollRight2() {
                var container = document.querySelector("#container2");
                scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    container.scrollLeft += 10;
                    scrollAmount += 10;
                    if(scrollAmount >= 700){
                        window.clearInterval(slideTimer);
                    }
                }, 5);
            };

function scrollLeft2() {
                var container = document.querySelector("#container2");
                scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    container.scrollLeft -= 10;
                    scrollAmount += 10;
                    if(scrollAmount >= 700){
                        window.clearInterval(slideTimer);
                    }
                }, 5);
            };

function scrollRight3() {
                var container = document.querySelector("#container3");
                scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    container.scrollLeft += 10;
                    scrollAmount += 10;
                    if(scrollAmount >= 700){
                        window.clearInterval(slideTimer);
                    }
                }, 5);
            };

function scrollLeft3() {
                var container = document.querySelector("#container3");
                scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    container.scrollLeft -= 10;
                    scrollAmount += 10;
                    if(scrollAmount >= 700){
                        window.clearInterval(slideTimer);
                    }
                }, 5);
            };

function scrollRight4() {
                var container = document.querySelector("#container4");
                scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    container.scrollLeft += 10;
                    scrollAmount += 10;
                    if(scrollAmount >= 700){
                        window.clearInterval(slideTimer);
                    }
                }, 5);
            };

function scrollLeft4() {
                var container = document.querySelector("#container4");
                scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    container.scrollLeft -= 10;
                    scrollAmount += 10;
                    if(scrollAmount >= 700){
                        window.clearInterval(slideTimer);
                    }
                }, 5);
            };

function scrollRight5() {
                var container = document.querySelector("#container5");
                scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    container.scrollLeft += 10;
                    scrollAmount += 10;
                    if(scrollAmount >= 700){
                        window.clearInterval(slideTimer);
                    }
                }, 5);
            };

function scrollLeft5() {
                var container = document.querySelector("#container5");
                scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    container.scrollLeft -= 10;
                    scrollAmount += 10;
                    if(scrollAmount >= 700){
                        window.clearInterval(slideTimer);
                    }
                }, 5);
            };

menuButton.addEventListener("click", uitklappen);

buttonOne.addEventListener("click", scrollLeft1);
buttonTwo.addEventListener("click", scrollRight1);
buttonThree.addEventListener("click", scrollLeft2);
buttonFour.addEventListener("click", scrollRight2);
buttonFive.addEventListener("click", scrollLeft3);
buttonSix.addEventListener("click", scrollRight3);
buttonSeven.addEventListener("click", scrollLeft4);
buttonEight.addEventListener("click", scrollRight4);
buttonNine.addEventListener("click", scrollLeft5);
buttonTen.addEventListener("click", scrollRight5);

knopZoeken.addEventListener("click", schuifUit);
knopZoekenAnnuleren.addEventListener("click", schuifIn);

//zoekenKnop.addEventListener("click", wordOnzichtbaar);
//zoekenAnnulerenKnop.addEventListener("click", wordZichtbaar)
