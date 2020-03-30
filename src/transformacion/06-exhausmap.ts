import { interval, fromEvent } from "rxjs";
import { take, switchMap, concatMap, exhaustMap } from "rxjs/operators";

const interval$ = interval(500).pipe(take(3))
const click$ = fromEvent(document, 'click');

click$.pipe(
    exhaustMap(() => interval$)
).subscribe(console.log)



// es util cuando tenemos observables q emite muchos valores y con este podemos evitar
// como en un formulario o boton q llama a un servicio.



