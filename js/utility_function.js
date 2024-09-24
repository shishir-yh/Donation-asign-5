//ok
console.log('utilit ok')
document.getElementById('btn-nkl').addEventListener('click', function () {
    calculation('dnt-bal-nkl', 'total-balance', 'inp-amn-nkl', 'for Flood Relief in Noakhali,Bangladesh')

})
// Feni
document.getElementById('btn-fni').addEventListener('click', function () {
    calculation('dnt-bal-fni', 'total-balance', 'inp-amn-fni', 'for Flood Relief in Feni,Bangladesh')
})
// quata
document.getElementById('btn-qut').addEventListener('click', function () {
    calculation('dnt-bal-qut', 'total-balance', 'inp-amn-qut', 'Aid for Injured in the Quota Movement, Bangladesh')
})
// history btn
document.getElementById('head-history').addEventListener('click', function () {
    const mainDonation = document.getElementById('main');
    mainDonation.classList.add('hidden');

    const historyDiv = document.getElementById('history');
    historyDiv.classList.remove('hidden')
})

