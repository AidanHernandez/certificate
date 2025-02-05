
let ChoiceOne = document.getElementById("choiceOne");
let choiceTwo = document.getElementById("choiceTwo");
let choiceThree = document.getElementById("choiceThree");
let main = document.getElementById("certificate");
let name;
let chose;


ChoiceOne.addEventListener("mouseleave", (e) => {
    name = ChoiceOne;
    leave();
});

ChoiceOne.addEventListener("mouseenter", (e) => {
    name = ChoiceOne;
    enter();
});

choiceTwo.addEventListener("mouseleave", (e) => {
    name = choiceTwo;
    leave();
});

choiceTwo.addEventListener("mouseenter", (e) => {
    name = choiceTwo;
    enter();
});

choiceThree.addEventListener("mouseleave", (e) => {
    name = choiceThree;
    leave();
});

choiceThree.addEventListener("mouseenter", (e) => {
    name = choiceThree;
    enter();
});



function leave(){
    name.classList.add("left");
    name.classList.remove("enter");
    setTimeout(() =>  name.classList.remove("left"),3000);
}

function enter(){
    name.classList.add("enter");
    name.classList.remove("left");
}






ChoiceOne.addEventListener("click", (e) => {
    chose = "living";
    chosen()
});

function chosen(){
    let gone = document.querySelector("h1");
    gone.style.display = "none";
    gone = document.querySelector("h2");
    gone.style.display = "none";
    gone = document.querySelector("div");
    gone.style.display = "none";

    main.style.width = "1100px";
    main.style.height = "850px";

    switch(chose){
        case "living":
            main.style.backgroundColor = "white";
            
    }
}