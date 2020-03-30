import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



const url = 'https://api.github.com/users?per_page=5';


const manejaErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response
}

const fetchPromesa = fetch(url);


const atrapaError = (err: AjaxError) => {
    console.warn('error en :', err.message)
    return of({})
}
// fetchPromesa
//     .then(resp => resp.json())
//     .then(data => console.log('data', data))
//     .catch()


// manejo de errores con fetch api

// fetchPromesa
//     .then( manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('data', data))
//     .catch(err => console.log('error en usuarios', err))

// ---------------------- 2da parte

ajax(url).pipe(
    // map(resp => resp.response)
    pluck('response'),
    catchError(atrapaError)
)
.subscribe(console.log);
