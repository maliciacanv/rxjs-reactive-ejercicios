import { fromEvent } from "rxjs";
import { tap, first, map } from "rxjs/operators";



const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    // tap( () => console.log('tap')),

    // first(), emitira solo el primer valor
    // first<MouseEvent>(event => event.clientY >= 150) con una condicion, que solo emitira el valor q cumpla con al codnicion

    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))


    tap<MouseEvent>( console.log),

    map(({clientX, clientY}) => ({clientY, clientX})),
    first(event => event.clientY >= 150) 


    ).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});

