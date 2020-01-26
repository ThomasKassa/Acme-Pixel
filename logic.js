// const swatches = document.querySelector('#swatches');

// swatches.addEventListener('click', (ev) => {
//     const current = swatches.querySelector('.selected');
//     current.classList.remove('selected');
//     const target = ev.target;
//     target.classList.add('selected');
// })

// const renderSwatches = () => {
//     const hex = [
//         '00',
//         '33',
//         '66',
//         '99',
//         'CC',
//         'FF'
//     ];
//     const colors = [];
//     hexValues.forEach(red => {
//         hexValues.forEach(green => {
//             hexValues.forEach(blue => {
//                 colors.push(`#${red}${green}${blue}`)
//             });
//         });
//     });
//     const html = colors.map(color => {
//         return `<div style='background-color:${color}</div>`;
//     }).join('');
//     swatches.innerHTML = html;
//     swatches.children[0].classList.add('selected');

// }
// renderSwatches();


// const board = document.querySelector('.grid-board');

// board.addEventListener('submit', (ev) => {
//     ev.preventDefault();
//     // const height = document.querySelector("[name='height']");
//     // const width = document.querySelector("[name='width']");
//     const createButton = form.querySelector('button');


// }

// const grid = [];
// const row = document.querySelector("[name='height']").value;
// const column = document.querySelector("[name='width']").value;
// const renderGrid = () => {
//     for(let i = 0; i < row; i ++) {
//         for(let j = 0; j < column; j++) {

//         }
//     }


//     const html = grid.map(box => {
//         return `<div class='box'></div>`
//     }).join('');
//     board.innerHTML = html;
// }
// renderGrid();

const arrOfColors = [];
const hex = ["00", "33", "66", "99", "cc", "ff"];
for (let i = 0; i < hex.length; i++) {
    for (let j = 0; j < hex.length; j++) {
        for (let k = 0; k < hex.length; k++) {
            arrOfColors.push(`${hex[i]}${hex[j]}${hex[k]}`);
        }
    }
}


// const div = document.querySelector('div');
// div.addEventListener('click', (ev) => {
//     ev.target.style.backgroundColor = '#ffffff';
//     ev.target.style.borderWidth = '1px';
// });
const button = document.getElementById('create')
button.addEventListener('click', function renderGrid(ev) {
    ev.preventDefault()
    let rows = document.getElementById('height').value;
    let columns = document.getElementById('width').value;

    let board = []
    while (rows > 0) {
        let newRow = [];
        let i = columns;
        while (i > 0) {
            newRow.push(`<div class='cell'></div>`);
            i--;
        }
        board.push(newRow);
        rows--;
    }
    const html = board.map(cell => {
        return `${cell}`
    }).join('')
    document.getElementById('board').innerHTML = html;
})

const colorBoard = document.querySelector('#colorBoard');
colorBoard.addEventListener('click', (ev) => {
    const current = colorBoard.querySelector('.selected');
    current.classList.remove('selected');
    const target = ev.target;
    target.classList.add('selected');
})

function renderColorGrid() {
    const arrOfColors = [];
    const hex = ["00", "33", "66", "99", "cc", "ff"];
    for (let i = 0; i < hex.length; i++) {
        for (let j = 0; j < hex.length; j++) {
            for (let k = 0; k < hex.length; k++) {
                arrOfColors.push(`<div style='background-color:#${hex[i]}${hex[j]}${hex[k]}'></div>`);
            }
        }
    }
    const html = arrOfColors.map(color => {
        return `${color}`
    }).join('')
    document.getElementById('colorBoard').innerHTML = html
    document.getElementById('colorBoard').children[0].classList.add('selected');

}
renderColorGrid();