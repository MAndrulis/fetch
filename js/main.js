console.log('START');

function average(list) {
    let sum = 0;

    for (const item of list) {
        sum += item;
    }

    return sum / list.length;
}

const github = 'https://github.com/MAndrulis/fetch/blob/main/data/marks.json'
const local = 'http://localhost:4514/data/marks.json'
const localError = 'http://localhost:4512/data/random.json';

const response = fetch(local)
    .then((res) => res.json())
    .then((data) => {
        const marksAverage = average(data.marks);
        console.log('Studento vidurkis:', marksAverage);
    })
    .catch(err => console.error('ERROR: kazkas blogai su uzklausa...', err))
    .finally(() => {
        console.log('Ir cia paskutinis fetch zingsnis...');
    });

console.log(response);

console.log('END');
