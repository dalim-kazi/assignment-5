function getPlayerNamesId(PlayerElementId) {
    const playerNameFiled = document.getElementById(PlayerElementId);
    const palyerNameFieldString = playerNameFiled.innerText;
    return palyerNameFieldString;
}

function getSetName(elementId, newName) {
    const setName = document.getElementById(elementId);
    setName.innerText = newName;
}

document.getElementById('messi-btn').addEventListener('click', function () {
    const messiField = getPlayerNamesId('messi-field');
    
    const selectPlayerList11 = getPlayerNamesId('select-1');
    getSetName('select-1', messiField);
})
document.getElementById('neymar-btn').addEventListener('click', function () {
    const neymarField = getPlayerNamesId('neymar-field');
    const selectPlayerList22 = getPlayerNamesId('select-2');
    getSetName('select-2', neymarField);
})

document.getElementById('ronaldo-btn').addEventListener('click', function () {
    const ronaldoField = getPlayerNamesId('ronaldo-field');
    const selectPlayerList33 =getPlayerNamesId('select-3')
    getSetName('select-3', ronaldoField )
})
document.getElementById('mBappy-btn').addEventListener('click', function () {
    const mBappyField = getPlayerNamesId('mBappy-field');
    const selectPlayer44 = getPlayerNamesId('select-4');
    getSetName('select-4', mBappyField)
})
document.getElementById('demerera-btn').addEventListener('click', function () {
    const demereraField = getPlayerNamesId('demerera-field');
    const selectPlayerList55 = getPlayerNamesId('select-5');
    getSetName('select-5', demereraField)
})
 
document.getElementById('ozil-btn').addEventListener('click', function () {
    const ozilField = getPlayerNamesId('ozil-field');
    const selectPlayerList = getPlayerNamesId('select-3');
    getSetName('select-3', ozilField);
})

document.getElementById('maradona-btn').addEventListener('click', function () {
    const maradonaField = getPlayerNamesId('maradona-field');
    const selsctPlayerList = getPlayerNamesId('select-4');
    getSetName('select-4', maradonaField)
})

document.getElementById('kaka-btn').addEventListener('click', function () {
    const kakaField = getPlayerNamesId('kaka-field');
    const selectPlayer = getPlayerNamesId('select-5');
    getSetName('select-5', kakaField)
})
document.getElementById('sadiomana-btn').addEventListener('click', function () {
    const sadiomanafield = getPlayerNamesId('sadiomana-field');
    const selectPlayerList = getPlayerNamesId('select-3');
    getSetName('select-3', sadiomanafield)
})