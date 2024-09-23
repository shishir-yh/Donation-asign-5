//ok
document.getElementById('btn-nkl')
    .addEventListener('click', function () {
        calculation('dnt-bal-nkl', 'total-balance', 'inp-amn-nkl')

    })

document.getElementById('btn-fni').addEventListener('click', function () {
    calculation('dnt-bal-fni', 'total-balance', 'inp-amn-fni')
})
document.getElementById('btn-qut').addEventListener('click', function () {
    calculation('dnt-bal-qut', 'total-balance', 'inp-amn-qut')
})
