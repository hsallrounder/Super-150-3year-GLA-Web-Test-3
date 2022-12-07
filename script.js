const adderBtn = document.getElementById('add_btn')
document.getElementById('new-ticket-section').style.display = "none";
adderBtn.addEventListener('click',() => {
    document.getElementById('new-ticket-section').style.display = "";
    document.getElementById('tickets').innerHTML = "";
})
var currentColor = localStorage.getItem('color') || "red";

function ticket_color(color) {
    currentColor = color;
}

const textArea = document.getElementById('text');
textArea.onkeyup = function(e) {
    var ticketList = JSON.parse(localStorage.getItem('ticketList')) || [];
    e = e || window.event;
    if(e.keyCode == 13) {
        var currentTicket = []
        currentTicket.push(textArea.value);
        currentTicket.push(currentColor);
        currentTicket.push("#" + makeid(6));
        console.log(currentTicket);
        ticketList.push(currentTicket);
        localStorage.setItem('ticketList',JSON.stringify(ticketList));
        document.getElementById('new-ticket-section').style.display = "none";
    loadTickets();
    }
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function loadTickets() {
    var ticketList = JSON.parse(localStorage.getItem('ticketList'));
    const tickets = document.getElementById('tickets');
    tickets.innerHTML = ``;
    for(let i = 0; i < ticketList.length; i++) {
        item = ticketList[i];
        var newTicket = document.createElement('section');
        newTicket.classList.add("ticket-area");
        var topColor = document.createElement('div')
        topColor.className = "top-color";
        topColor.style.background = item[1];
        var random = document.createElement('div');
        random.className = "random-text";
        random.innerText = item[2];
        var varOther = document.createElement('div')
        varOther.className = "rest-area";
        varOther.innerText = item[0];
        newTicket.appendChild(topColor);
        newTicket.appendChild(random);
        newTicket.appendChild(varOther);
        tickets.appendChild(newTicket);
    }
}