import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";




const click$ = fromEvent(document, 'click')
const interval$ = interval(1000)

// genera un problema en memoria
click$.pipe(
    // mergeMap(() => interval$)
    switchMap(() => interval$)

)
.subscribe(console.log)


// el merge map mantiene todas las subscripciones activas internas
