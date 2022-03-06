//el "*3e6" me permite realizar el ret.
const wait = ret => { for (let i = 0; i < ret*3e6 ; i++); }

const showWords = (text, time, amountWords, callback) => {
    let print = text.split(' ');
    let totalWords = 0;
    amountWords = text.split(' ').length;
    totalWords = totalWords + amountWords;
    for(const i of print){
        console.log(i);
        wait(time);
    }
    callback(false,totalWords);
}

let text1 = 'Estaba la pajara pinta';
let text2 = 'sentada en su verde limon';
let text3 = 'con el pico recoge la rama con la rama cortaba la flor';
const tiempo = 400;

showWords(text1, tiempo, 0, (totalWords) => {
    let total1 = 0;
    total1 = text1.split(' ').length;
    showWords(text2, tiempo, totalWords, (error,totalWords) => {
        let total2 = 0;
        total2 = text2.split(' ').length;
        showWords(text3, tiempo, totalWords, (error,totalWords) => {
            let total3 = 0;
            total3 = text3.split(' ').length;
            console.log('Proceso completo, cantidad de palabras:', total1+total2+total3);
        });
    });
});