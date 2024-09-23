
function getInnerText(id) {
    return parseFloat(document.getElementById(id).innerText)
}

function getInnerValue(id) {
    return Number(document.getElementById(id).value);
}
// calculation('dnt-bal-nkl','total-balance','inp-amn-nkl')
function calculation(totalBal, myBal, innerValue) {
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

    my_modal_2.showModal();
}