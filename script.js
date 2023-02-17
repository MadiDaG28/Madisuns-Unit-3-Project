/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector(".title");
let storyOpening = document.querySelector(".story-opening");
let optionOneButton = document.querySelector(".option-one");
let optionTwoButton = document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end");






/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

}; */




optionOneButton.onclick = function() {
    title.style.display = "none";
    optionOneScreen.style.display = "block";
    storyOpening.style.display = "none";
    optionOneButton.style.display = "none";
    optionTwoButton.style.display = "none";
    document.onkeydown = function() {
        optionOneScreen.style.display = "none";
        optionTwoScreen.style.display = "none";
        storyOpening.style.display = "none";
        optionOneButton.style.display = "none";
        optionOneEnd.style.display = "block";
    };

};

optionTwoButton.onclick = function() {
    title.style.display = "none";
    optionOneScreen.style.display = "none";
    optionTwoScreen.style.display = "block";
    storyOpening.style.display = "none";
    optionOneButton.style.display = "none";
    optionTwoButton.style.display = "none";
    optionOneEnd.style.display = "none";};
    document.onkeydown = function() {
        optionOneScreen.style.display = "none";
        optionTwoScreen.style.display = "none";
        storyOpening.style.display = "none";
        optionOneButton.style.display = "none";
        optionOneEnd.style.display = "none";
        optionTwoEnd.style.display="block";
    };


// let body = document.querySelector("body");