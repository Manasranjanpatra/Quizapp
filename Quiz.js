const menu = [
    {
        question: "Q1. What isss your name ?",
        a: "Answer  ranjan patra",
        b: "Answer  ranjan patra",
        c: "Answer  ranjan patra",
        d: "Answer  ranjan patra",
        ans: "ans1"
    },
    {
        question: "Q2. What is full form of CSS ?",
        a: "Cascading sheet  style",
        b: "Cascading style sheet",
        c: "Cascading short  style",
        d: "Cascading seen  style ",
        ans: "ans2"
    },
    {
        question: "Q3.We enclose HTML tags within ?",
        a: "/*  */",
        b: "! ! ",
        c: "< >",
        d: "< />",
        ans: "ans3"
    },
    {
        question: "Q4.How to write Comment in CSS ?",
        a: "<--  -->",
        b: "*/  */",
        c: "//",
        d: "/*  */",
        ans: "ans4"
    }
   

];
const question = document.querySelector(".question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const botton = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const scoree = document.querySelector(".score");
const last = document.querySelector(".manas");
// console.log(answers);

let page = 0;
let score = 0;
const Next = () => {
    page = page + 1;

}

const getcheckanser = () => {
    let answer;
    answers.forEach((currelem) => {
        if (currelem.checked) {
            answer = currelem.id
        }
    })
    return answer;

}
const deletecheck = () => {
    answers.forEach((currelem) => {
        currelem.checked = false;
    })
}

const loadque = () => {
    question.innerHTML = menu[page].question;
    option1.innerHTML = menu[page].a;
    option2.innerHTML = menu[page].b;
    option3.innerHTML = menu[page].c;
    option4.innerHTML = menu[page].d;

}
botton.addEventListener('click', () => {
    const Checkanswer = getcheckanser();
    console.log(Checkanswer);
    if (Checkanswer === menu[page].ans) {
        score++;
    }
    page++;
    deletecheck();
    if (page < menu.length) {
        loadque();
    }
    else {

        console.log("Htis is the end");
        last.style.display="none";
        question.style.display = "none";
        // option1.style.display = "none"
        botton.style.display = "none";
        console.log(`your score is ${score}/${menu.length}`);
        scoree.style.display = "block";
        scoree.innerHTML = `
        <h1>Your score is  ${score}/${menu.length}😎</h1>
        <button class="manas" onclick="location.reload()">Play Again</button>

        `;
    }
});