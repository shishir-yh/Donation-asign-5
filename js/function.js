console.log('funct ok')
function getInnerText(id) {
    return parseFloat(document.getElementById(id).innerText)
}

function getInnerValue(id) {
    return Number(document.getElementById(id).value);
}
// calculation('dnt-bal-nkl','total-balance','inp-amn-nkl')
function calculation(totalBal, myBal, innerValue, string) {
    const totalbalNkl = getInnerText(totalBal)
    const Bal = getInnerText(myBal);
    const inpAmnNkl = getInnerValue(innerValue)
    if (isNaN(inpAmnNkl) || 0 > inpAmnNkl || Bal <= 0 || inpAmnNkl > Bal) {
        return alert('INVALID INPUT SIR');
    }
    const newTotal = Number(totalbalNkl + inpAmnNkl);
    document.getElementById(totalBal).innerText = newTotal;

    const newMyBal = Bal - inpAmnNkl;
    document.getElementById(myBal).innerText = newMyBal;
    const timeZone = new Date().toLocaleString();
    // the history function
    const history = document.getElementById('history');
    history.innerHTML += `<div class="border border-gray-300 p-4 rounded-2xl m-4">
            <h1 class="font-bold">${inpAmnNkl} Taka is Donated ${string}</h1>
             <p>Date is ${timeZone} </p>
        </div>`
    // delete here
    my_modal_2.showModal();
}