const quizData = [
        {
            question: "What is the capital of France?",
            a: "Paris",
            b: "London",
            c: "Berlin",
            d: "Madrid",
            correct: "a",
        },
        {
            question: "What is the capital of Spain?",
            a: "Paris",
            b: "London",
            c: "Berlin",
            d: "Madrid",
            correct: "d",
        },
        {
            question: "What is the capital of Germany?",
            a: "Paris",
            b: "London",
            c: "Berlin",
            d: "Madrid",
            correct: "c",
        },
        {
            question: "What is the capital of England?",
            a: "Paris",
            b: "London",
            c: "Berlin",
            d: "Madrid",
            correct: "b",
        },
    ];

    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");

    const currentQuiz = 0;
    let score = 0;

    function loadQuiz(){
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }

    function deselectAnswers(){
        answerEls.forEach(answerEl => {
            answerEl.checked = false;
        });
    }

    submitBtn.addEventListener("click", () => {
        const answer = getSelected();

        
    });