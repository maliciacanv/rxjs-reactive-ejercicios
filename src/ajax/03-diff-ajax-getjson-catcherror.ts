import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

// const obs$ = ajax.getJSON(url, {
//     'Content-Type': 'application/json',
//     'mi-token': 'ABC123',
// });

// diferencia netre ajax solo y getJSON ajax

const manejaError = (err: AjaxError) => {
    console.warn('error', err.message)
    return of({
        ok: false,
        usuarios: []
    });
}

// const obs$= ajax.getJSON(url).pipe(
//     catchError(manejaError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// );


const obs$= ajax.getJSON(url)
const obs2$ = ajax(url)

// obs$.subscribe(data => console.log('data', data));
obs$.pipe(
    catchError(manejaError)
)
.subscribe({
    next: val => console.log('val', val),
    error: err => console.warn('error', err),
    complete: () => console.log('completado')
});

obs2$.subscribe(data => console.log('datasolo cn ajax', data));








