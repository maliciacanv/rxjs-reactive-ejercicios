import { interval, fromEvent } from "rxjs";
import { sample } from "rxjs/operators";



const interval$ = interval(500);

const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$) // primero el interval tiene q emitir el valor para que el sample emita el valor
)
.subscribe(console.log)

