const quizData = [
        {
            question: "Dans quel balise HTML plaçons-nous le code JavaScript?",
            a: "La balise script",
            b: "La balise javascript",
            c: "La balise js",
            d: "La balise rel",
            correct: "a",
        },
        {
            question: "Comment faire appelle à une fonction nommée « sum »?",
            a: " call function sum()",
            b: "Aucune de ces réponses n’est vraie.",
            c: "call sum()",
            d: "sum()",
            correct: "d",
        },
        {
            question: "Quel est le bon endroit pour insérer un code JavaScript?",
            a: "La section <head>",
            b: " La section <body>",
            c: "Les deux sections <head> et <body> sont correctes",
            d: "Aucune de ces réponses n’est vraie.",
            correct: "c",
        },
        {
            question: "Comment écrire une condition IF en JavaScript?",
            a: "if a = 2",
            b: "if (a == 2)",
            c: "if a == 2 else",
            d: "if a = 2 then",
            correct: "b",
        },
        {
            question: "Quelle méthode permet d’ajouter un élément au début d’un tableau en JavaScript?",
            a: "push()",
            b: "unshift()",
            c: "pop()",
            d: "shift()",
            correct: "b",
        },
        {
            question: "Comment peut-on déclarer une variable en JavaScript?",
            a: "variable myVar",
            b: "var myVar",
            c: "v myVar",
            d: "let myVar = var",
            correct: "b",
        },
        {
            question: "Quelle est la sortie de: console.log(typeof NaN)?",
            a: "undefined",
            b: "object",
            c: "number",
            d: "string",
            correct: "c",
        },
        {
            question: "Quel mot-clé est utilisé pour créer une classe en JavaScript?",
            a: "class",
            b: "function",
            c: "object",
            d: "constructor",
            correct: "a",
        },
        {
            question: "Comment peut-on vérifier si une variable est un tableau?",
            a: "Array.isArray(var)",
            b: "var.isArray()",
            c: "typeof var === 'array'",
            d: "var instanceOf Array",
            correct: "a",
        },
        {
            question: "Quelle fonction est utilisée pour convertir un objet JSON en chaîne de caractères?",
            a: "JSON.parse()",
            b: "JSON.stringify()",
            c: "toString()",
            d: "JSON.convert()",
            correct: "b",
        },
        {
            question: "Comment écrit-on un commentaire sur une seule ligne en JavaScript?",
            a: "# Ceci est un commentaire",
            b: "<!-- Ceci est un commentaire -->",
            c: "// Ceci est un commentaire",
            d: "/* Ceci est un commentaire */",
            correct: "c",
        },
        {
            question: "Quel est le résultat de: console.log(2 + '2')?",
            a: "4",
            b: "22",
            c: "undefined",
            d: "NaN",
            correct: "b",
        },
        {
            question: "Quelle est la valeur par défaut de 'this' dans une fonction classique (non fléchée) en mode strict?",
            a: "undefined",
            b: "null",
            c: "l’objet global",
            d: "une chaîne vide",
            correct: "a",
        },
        {
            question: "Que fait la méthode `splice()` sur un tableau?",
            a: "Ajoute un élément à la fin",
            b: "Supprime un élément spécifique",
            c: "Ajoute, supprime ou remplace des éléments dans le tableau",
            d: "Retourne une copie d'une portion du tableau",
            correct: "c",
        }
    ];

    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");

    let currentQuiz = 0;
    let score = 0;
    
    loadQuiz();

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

    function getSelected(){
        let answer;
        answerEls.forEach(answerEl => {
            if(answerEl.checked){
                answer = answerEl.id;
            }
        })
        return answer;
    }

    submitBtn.addEventListener("click", () => {
        const answer = getSelected();
        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();
            } else {
                quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                
                <button onclick="location.reload()">Reload</button>
                `;
            }
        }
    })