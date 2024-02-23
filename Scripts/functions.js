function getElement(element) {
    const getByID = document.getElementById(element);
    return getByID;
}
function getInnerText(git) {
    const text = document.getElementById(git).innerText;
    return text;
}
// function click(s){
//     s.addEventListener("click", clickListener);
// }
function setBgColor(he) {

    getElement(he).classList.add('bg-btnGreen');
}
function removeBgColor(re) {
    getElement(re).classList.remove('bg-btnGreen');
}

function hideElement(he) {
    getElement(he).classList.add('hidden');
}
function ShowElement(re) {
    getElement(re).classList.remove('hidden');
}

function increaseTotalSeat(seat) {
    const totalNumber = getInnerText(seat);
    const number = parseInt(totalNumber) + 1;
    // console.log(number);
    document.getElementById('total-Seat').innerText = number;
}
function reduceTotalSeat(seat) {
    const totalNumber = getInnerText(seat);
    const number = parseInt(totalNumber) - 1;
    // console.log(number);
    document.getElementById('total-Seat').innerText = number;
}
function increaseNumber(seat) {
    const totalNumber = getInnerText(seat);
    const number = parseInt(totalNumber) + 1;
    document.getElementById('seat-Number').innerText = number;
}
function reduceNumber(seat) {
    const totalNumber = getInnerText(seat);
    const number = parseInt(totalNumber) - 1;
    document.getElementById('seat-Number').innerText = number;
}

function total() {
    document.getElementById('total-taka').innerText = ticketContainer.length * 550;
}
// function reduceTotal(seat){
//     const totalNumber=getInnerText(seat);
// const number= parseInt(totalNumber)-550;
// getInnerText(seat)=number;
// }
// function increaseTotal(seat){
//     const totalNumber=getInnerText(seat);
// const number= parseInt(totalNumber)+1;
// getInnerText(seat)=number;
// // }
// function reduceGrandTotal(gt) {
//     total();
//     const totalNumber = getInnerText(gt);
//     const number = parseInt(totalNumber) - 1;
//     getInnerText(gt) = number;
// }
function grandTotal() {
    document.getElementById('grand-total').innerText = ticketContainer.length * 550;
}


// function getInputValue(element){
//     const getByID=document.getElementById('element') ;
//     return getByID;
//  }
// const Ticket1 = getInnerText('seat-Number');
// getElement('seat-1').classList.add('hidden');

// const Ticket1Hidden=getElement('seat-1').classList;

// console.log(Ticket1);