import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";



const numeros$ = of<number|string>(1,'1',1,3,3,2,2,4,4,5,3,1,'1');

numeros$.pipe(
    distinct()
).subscribe(console.log);

interface Personaje {
    nombre: string;
}
const personajes: Personaje[] = [
    { nombre: 'megaman'},
    { nombre: 'x'},
    { nombre: 'zero'},    
    { nombre: 'zero'},
    { nombre: 'dr, willy'},
    { nombre: 'x'},
    { nombre: 'megaman'},
    { nombre: 'zero'}
]

from(personajes).pipe(
    distinct(per => per.nombre)
).subscribe(console.log);