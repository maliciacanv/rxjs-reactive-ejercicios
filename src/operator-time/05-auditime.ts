import { fromEvent } from "rxjs";
import { tap, auditTime, map } from "rxjs/operators";



const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    map(({x,y}) => ({x,y})),
    tap(val => console.log('tap', val)),
    auditTime(2000)
).subscribe(console.log)