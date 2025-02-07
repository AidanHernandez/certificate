
let ChoiceOne = document.getElementById("choiceOne");
let choiceTwo = document.getElementById("choiceTwo");
let choiceThree = document.getElementById("choiceThree");
let certificateOne = document.getElementById("certificateOne");
let certificateTwo = document.getElementById("certificateTwo");
let certificateThree = document.getElementById("certificateThree");
let options = document.getElementById("options");
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

choiceTwo.addEventListener("click", (e) => {
    chose = "Average";
    chosen()
});

choiceThree.addEventListener("click", (e) => {
    chose = "Boring";
    chosen()
});

function chosen(){
    let gone = document.querySelector("h1");
    gone.style.display = "none";
    gone = document.querySelector("h2");
    gone.style.display = "none";
    gone = document.querySelector("div");
    gone.style.display = "none";
    options.style.display = "flex";

    switch(chose){
        case "living":
            certificateOne.style.display = "flex"
            certificateOne.style.backgroundColor = "white";
            document.getElementById('customCss').setAttribute('href', 'page1/test.css');
            return
        case "Average":
            certificateTwo.style.display = "flex"
            certificateTwo.style.backgroundColor = "white";
            document.getElementById('customCss').setAttribute('href', 'pag2/page2.css');
            console.log("average")
            return
        case "Boring":
            certificateThree.style.display = "flex"
            certificateThree.style.backgroundColor = "white";
            document.getElementById('customCss').setAttribute('href', 'page3/page3.css');
            console.log("borimg")
            return

    }
}


document.getElementById('date').innerText = new Date().toLocaleDateString()

let back = document.getElementById('back');


back.addEventListener("click", (e) => {
    let gone = document.querySelector("h1");
    gone.style.display = "flex";
    gone = document.querySelector("h2");
    gone.style.display = "flex";
    gone = document.querySelector("div");
    gone.style.display = "flex";
    options.style.display = "none";
    switch(chose){
        case "living":
            certificateOne.style.display = "none"
            
            document.getElementById('customCss').setAttribute('href', 'none');
            return
        case "Average":
            certificateTwo.style.display = "none"

            document.getElementById('customCss').setAttribute('href', 'none');
            console.log("average")
            return
        case "Boring":
            certificateThree.style.display = "none"

            document.getElementById('customCss').setAttribute('href', 'none');
            console.log("borimg")
            return

    }

});