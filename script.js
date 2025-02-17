const story = {
    start: {
        text: "You are Frodo Baggins in the Shire. Gandalf arrives and warns you of the One Ring's danger. What do you do?",
        options: [
            { text: "Accept the quest and leave for Rivendell", next: "rivendell" },
            { text: "Stay in the Shire", next: "shire_doom" }
        ]
    },
    rivendell: {
        text: "You reach Rivendell and join the Fellowship. Do you go through Moria or take the mountain pass?",
        options: [
            { text: "Enter Moria", next: "moria" },
            { text: "Take the mountain pass", next: "caradhras" }
        ]
    },
    shire_doom: {
        text: "The Ringwraiths find you in the Shire. You are captured. Game Over.",
        options: []
    },
    moria: {
        text: "You enter the Mines of Moria. A Balrog appears! What do you do?",
        options: [
            { text: "Fight with Gandalf", next: "gandalf_falls" },
            { text: "Fly! You Fools!", next: "escape_moria" }
        ]
    },
    caradhras: {
        text: "A great blizzard blocks your way. The Fellowship barely survives and must turn back.",
        options: [
            { text: "Go to Moria instead", next: "moria" } ]
    },
    gandalf_falls: {
        text: "Gandalf fights the Balrog and falls into the abyss. You escape and continue the quest.",
        options: [
            { text: "Head to Lothlorien", next: "lothlorien" } ]
    },
    escape_moria: {
        text: "You escape Moria but are pursued by orcs. You reach Lothlorien for refuge.",
        options: [
            { text: "Seek help from Galadriel", next: "lothlorien" } ]
    },
    lothlorien: {
        text: "Galadriel gives you gifts and guidance. You must decide the next path.",
        options: [
            { text: "Go to Gondor", next: "gondor" },
            { text: "Continue to Mordor", next: "mordor" }
        ]
    },
    gondor: {
        text: "You arrive at Gondor and prepare for battle against Sauron's army.",
        options: [
            { text: "Defend Minas Tirith", next: "battle" } ]
    },
    mordor: {
        text: "You and Sam enter Mordor to destroy the One Ring.",
        options: [
            { text: "Climb Mount Doom", next: "mount_doom" } ]
    },
    battle: {
        text: "The battle is fierce, but Aragorn arrives with reinforcements. You win!",
        options: []
    },
    mount_doom: {
        text: "At Mount Doom, you hesitate. Gollum appears and takes the ring. The ring is destroyed, and Sauron falls! You win!",
        options: []
    }
};

let currentState = "start";

const gameContainer = document.getElementById("game-container");
const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");

function addAnswerButton(text, nextState) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("choice-btn");
    button.onclick = () => {
        currentState = nextState;
        renderQuestion();
    };
    answersContainer.appendChild(button);
}

function renderQuestion() {
    const node = story[currentState];
    questionContainer.textContent = node.text;
    answersContainer.innerHTML = "";
    node.options.forEach(option => {
        addAnswerButton(option.text, option.next);
    });
}

function initializeUI() {
    gameContainer.innerHTML = "";
    const title = document.createElement("h1");
    title.textContent = "Lord of the Rings Adventure";
    gameContainer.appendChild(title);
    
    const questionDiv = document.createElement("div");
    questionDiv.id = "question-container";
    questionContainer.textContent = "Your journey begins in the Shire...";
    questionDiv.appendChild(questionContainer);
    gameContainer.appendChild(questionDiv);
    
    answersContainer.id = "answers";
    gameContainer.appendChild(answersContainer);
    renderQuestion();
}

// Start game
initializeUI();


