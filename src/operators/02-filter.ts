import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(1,10).pipe(
    filter((val, i) => {
        console.log(i)
        return val % 2 === 1 
    })
)
// .subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string
}
const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'heroe',
        nombre: 'batman'   
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
]

from(personajes).pipe(
    filter(p => p.tipo === 'heroe')
).subscribe(console.log)


// encadenamiento de operadores

from(personajes).pipe(
    filter(p => p.tipo === 'heroe')
).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), // recibe un keyboardevent, sale un estring
    filter(key => key === 'Enter')
);

keyup$.subscribe(console.log)











