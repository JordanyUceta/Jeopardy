// categories is the main data structure for the app; it looks like this:
const table = document.getElementById('game'); 
const questions = [0,1,2,3,4]; 
const start = document.getElementById('start'); 

start.addEventListener('click', function() {
    questions.forEach(arr => fillTable()); 

})


function randomIdx() {
    let randomNum = Math.floor(Math.random() * 100); 
    console.log(randomNum); 
    return randomNum; 
}



//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function getCategoryIds() {
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

function getCategory(catId) {
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    let id = randomIdx();
    let url = await axios.get(`https://jservice.io/api/category?id=${id}`)

    const column = document.createElement('div'); 
    column.classList.add('gen-column')
    column.innerHTML = url.data.title; 
    table.append(column); 

    questions.forEach(iter => {
        const card = document.createElement('div'); 
        card.classList.add('card'); 
        card.innerHTML = '?'; 
        column.append(card); 

        // 
        
        //

        async function anon() {
            let obj = await axios.get(`https://jservice.io/api/category?id=${id}`)
            card.setAttribute('data-question', obj.data.clues[iter].question); 
            card.setAttribute('data-answer', obj.data.clues[iter].answer)
            console.log(obj.data.clues[iter])
        }
        anon(); 
        card.addEventListener('click', handleClick )

    })

  

    
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {

    console.log('clicked'); 
    // const card = this.getElementsByClassName('card'); 
    const textDisplay = document.createElement('div'); 
    const answerBtn = document.createElement('button'); 
    answerBtn.innerHTML = 'Answer'; 
    textDisplay.innerHTML = this.getAttribute('data-question'); 
    this.append(textDisplay, answerBtn); 
    
    answerBtn.addEventListener('click', getResult)
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click', handleClick))
}



function getResult() {

    const allCards = Array.from(document.querySelectorAll('.card')); 
    allCards.forEach(card => card.addEventListener('click', handleClick));

    const cardOfBtn = this.parentElement;
    cardOfBtn.classList.add('final-answer');
    cardOfBtn.removeEventListener('click', handleClick);
    
    //
    const answer = document.createElement('div') 
    answer.innerHTML = cardOfBtn.getAttribute('data-answer'); 
    // answer.parentElement.append(answer);

    console.log('you clicked the button');
    console.log(cardOfBtn);
    cardOfBtn.innerHTML = this.getAttribute('data-answer'); 
    console.log(cardOfBtn.getAttribute('data-answer')); 
    cardOfBtn.append(cardOfBtn.getAttribute('data-answer'));
    
    // 

//     setTimeout(() => {
//         while (cardOfBtn.firstChild) {
//             cardOfBtn.removeChild(cardOfBtn.lastChild); 
//         }
// }, 100)



}



/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO