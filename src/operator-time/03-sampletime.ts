import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";



const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    sampleTime(2000), // antes de cualquier operator por espacio
    map(({x,y}) => ({x,y}))

)
.subscribe(console.log)


