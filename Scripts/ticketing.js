const ticketContainer = [];

function clickListener(seat) {
    if (ticketContainer.includes(seat) === false && ticketContainer.length < 4) {
        addTicket(seat);
    }
    else if (ticketContainer.includes(seat) === true) {
        removeTicket(seat);
    }
}

function addTicket(ticket) {
    // indexing in array
    ticketContainer.push(ticket);
    // Setting bg color
    setBgColor(ticket);
    // showing the ticket
    if (ticketContainer.length === 1) {
        ShowElement('seat-1');
        const a = getInnerText(ticket);
        document.getElementById('seatNumber-1').innerText = a;
    }
    else if (ticketContainer.length === 2) {
        ShowElement('seat-2');
        const b = getInnerText(ticket);
        document.getElementById('seatNumber-2').innerText = b;
    }
    else if (ticketContainer.length === 3) {
        ShowElement('seat-3');
        const c = getInnerText(ticket);
        document.getElementById('seatNumber-3').innerText = c;
    }
    else if (ticketContainer.length === 4) {
        ShowElement('seat-4');
        const d = getInnerText(ticket);
        document.getElementById('seatNumber-4').innerText = d;
    }
    // reducing total number
    reduceTotalSeat('total-Seat');
    increaseNumber('seat-Number');
    total();
    grandTotal();
}


function removeTicket(ticket) {

    for (let i = 0; i < ticketContainer.length; i++) {
        const a = ticketContainer.shift();
        if (ticket === a) {
            continue;
        }
        ticketContainer.push(a);
    }
    removeBgColor(ticket);
    // hiding the ticket
    if (getInnerText('seatNumber-1') === getInnerText(ticket)) { hideElement('seat-1'); }
    else if (getInnerText('seatNumber-2') === getInnerText(ticket)) { hideElement('seat-2'); }
    else if (getInnerText('seatNumber-3') === getInnerText(ticket)) { hideElement('seat-3'); }
    else if (getInnerText('seatNumber-4') === getInnerText(ticket)) { hideElement('seat-4'); }
    // reducing total number
    increaseTotalSeat('total-Seat');
    reduceNumber('seat-Number');
    total();
    grandTotal();

}


function discount() {
    const a = getElement("coupon-input").value;
    if (a === "NEW15") {
        const discount = ticketContainer.length * 550 * .15;
        document.getElementById('grand-total').innerText = ticketContainer.length * 550 - discount;
        getElement('apply-btn').classList.add('btn-disabled');
        getElement('discounted-price-display').classList.remove('hidden');
        getElement('discounted-price').innerText=discount;
    }
    else if (a === 'Couple 20') {
        const discount = ticketContainer.length * 550 * .20;
        document.getElementById('grand-total').innerText = ticketContainer.length * 550 - discount;
        getElement('apply-btn').classList.add('btn-disabled');
        getElement('discounted-price-display').classList.remove('hidden');
        getElement('discounted-price').innerText=discount;

    }
    else {
        my_modal_1.showModal();
    }
    // console.log(getInnerText('coupon-input'));
}


// document.getElementById('coupon-input')

// console.log('Ticketing connected')