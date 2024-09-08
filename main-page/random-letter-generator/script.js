function generateletter(){
    let vogals = 'AEIOU';
    let consoants = 'BCDFGHJKLMNPQRSTVWXYZ';
    let letter = '';

    const vogalchecked = document.getElementById('vogal').checked;
    const consoantchecked = document.getElementById('consoant').checked;

    if (vogalchecked) {
        letter += vogals;
    }
    if(consoantchecked) {
        letter += consoants;
    }
    if (letter === '') {
        document.getElementById('res').textContent = 'Selecione uma opção';
        return;
    }

    const randomindex = Math.floor(Math.random() * letter.length);
    const randomletter = letter[randomindex];

    document.getElementById('res').innerHTML = randomletter;
}