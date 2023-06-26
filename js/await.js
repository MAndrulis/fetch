console.log('START');

function average(list) {
}



const github = 'https://github.com/MAndrulis/fetch/blob/main/data/marks.json'
const local = 'http://localhost:4514/data/marks.json'
const localError = 'http://localhost:4514/data/random.json';

try {
    const response = await fetch(localError);
    const data = await response.json();
    const marksAverage = average(data.marks);

    console.log(response);
    console.log(data);
    console.log('Studento vidurkis:', marksAverage);
} catch (err) {
    console.log('ERROR: kazkas blogai...');
    console.warn(err);
} finally {
    console.log('Ir cia paskutinis fetch-finally zingsnis...');
}



console.log('END');


/*
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

*/