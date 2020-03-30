import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
    distinctUntilKeyChanged('nombre')
).subscribe(console.log); 