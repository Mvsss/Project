const questions = [
    {
        question: "Capital of Belarus?" , 
        answers: [
            {text: "Liozno", correct: false},
            {text: "New York", correct: false},
            {text: "Minsk", correct: true},
            {text: "London", correct: false},
        ]

        
    },

   
    {
        question: "What girl name is Alvina" , 
        answers: [
            {text: "Very beautiful and very very sweat", correct: true},
            {text: "Toxic", correct: false},
            {text: "Angry", correct: false},
            {text: "Old woman", correct: false},
        ]

        
    },
    
    {
        question: "Who is the cat Loona?" , 
        answers: [
            {text: "Little angry ball", correct: false},
            {text: "Wonderful cat with a wonderful appetite", correct: true},
            {text: "Normally cat", correct: false},
            {text: "Black colored gremlin", correct: false},
        ]

        
    },
    
    {
        question: "Who is MVS?" , 
        answers: [
            {text: "Famous Belarus rapper", correct: true},
            {text: "Schoolboy from North Belarus", correct: false},
            {text: "Pro Digger Online player", correct: false},
            {text: "Vladick Vinogradov", correct: false},
            
        ]

        
    }
    
    
]

    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-button");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz(){
            resetState();
            currentQuestionIndex = 0;
            score = 0;
            nextButton.innerHTML = "Next";
            showQuestion();
    }

    function showQuestion(){
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
        currentQuestion.answers.forEach(answers => {
            const button = document.createElement("button");
            button.innerHTML = answers.text;
            button.classList.add("btn");
            answerButton.appendChild(button);
            if (answers.correct) {
                button.dataset.correct = answers.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }

    function resetState(){
        nextButton.style.display = "none";
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild);
        }
    }
    
    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButton.children).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }

        function showScore(){
            resetState();
            questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
            nextButton.innerHTML = "Play Again";
            nextButton.style.display = "block";
        }

        function handleNextButton(){
            currentQuestionIndex++;
            if(currentQuestionIndex < questions.length){
                showQuestion();
            }else{
                showScore();
            }
        }
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            resetState();
            handleNextButton();
        }else{
            startQuiz();
        }
    });
    startQuiz();
    