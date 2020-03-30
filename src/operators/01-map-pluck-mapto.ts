import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo} from 'rxjs/operators';

// range(1,5).pipe(
//     //entrada salida
// map<number, number>(val => val * 10)
// )
// .subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
)

const keyupPluck$ = keyup$.pipe(
    // pluck('key') para llamar de frente a una propiedad
    pluck('target', 'baseURI') // PARA LLAMAR A UNA PROPIEDAd q esta dentro de un obj
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
)


keyupCode$.subscribe(val => console.log('map', val))

keyupPluck$.subscribe(code => console.log('pluck', code))

keyupMapTo$.subscribe(code => console.log('mapto', code))

