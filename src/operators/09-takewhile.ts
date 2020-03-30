import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x, y}) => ({x,y})),
    // takeWhile(({y}) => y <= 150)

    // el segundo valor es booleano es un inclusive que va a tomar el ultimo valor depsues de los 150 y lo va a mostarr
     
    takeWhile(({y}) => y <= 150, true)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('completado')
});
