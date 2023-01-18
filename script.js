let field = document.querySelector('#field');
let colors = ['red', 'green', 'blue'];
let rows = 3;
let cols = 3;

let out = document.querySelector('.out');
let numberMoves = document.querySelector('.numberMoves')


createTable() 
function createTable() {
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            let col = getRandomColor(colors)
            td.classList.add(col)
            td.dataset.colors = col
            tr.appendChild(td)
        }
        field.appendChild(tr)
    }

}

function getRandomColor(colors) {
    let lastIndex = colors.length -1
    return colors[Math.floor(Math.random() * (lastIndex - 0 + 1)) + 0]
}
let count = 0;
let td = document.querySelectorAll('td')
for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', function() {
        count++
        numberMoves.textContent = count;
        let index = colors.indexOf(td[i].dataset.colors)  
        td[i].classList.remove(td[i].dataset.colors)

        if(index == 2){
            index = -1
        }
        if(td[i].classList.contains(td[i].dataset.colors) == false){
            index++
            let nextColor = colors[index]
            td[i].classList.add(nextColor)
            td[i].dataset.colors = nextColor
            checkVoctory(nextColor)
        }
    })
}

let greenCount = 0;
let redCount = 0;
let blueCount = 0;
for (let i = 0; i < td.length; i++) {
    if(td[i].classList.contains('green')){
        greenCount++
    }
    console.log(greenCount)
    if(td[i].classList.contains('red')){
        redCount++
        console.log(redCount)
    }
    if(td[i].classList.contains('blue')){
        blueCount++
        console.log(blueCount)
    }
}




function checkVoctory(classColor) {
    let flag = true;
    let res;
    for (let elem of td) {

        if(flag == true){
            if(elem.classList.contains(classColor)){
                res = "Победа"
            }
            else{
                flag = false;
                res = 'Еще нет';

            }
        }
        
    }
    out.textContent = res
   
}

