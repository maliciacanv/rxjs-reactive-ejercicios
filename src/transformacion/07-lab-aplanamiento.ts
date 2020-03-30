

// creando un formulario

import { fromEvent, of } from "rxjs"
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from "rxjs/operators"
import { ajax } from "rxjs/ajax"

const form = document.createElement('form')
const inputtEmail = document.createElement('input')
const inputpass = document.createElement('input')
const submit = document.createElement('button')

// helper

const peticionesHttpLogin = (userPass) => 
ajax.post('https.in/api/login?delay=1', userPass)
.pipe(
    pluck('response', 'token'),
    catchError( err => of('xxx'))
);

// configuraciones

inputtEmail.type = 'email';
inputtEmail.placeholder = 'email'
inputtEmail.value = 'eve.holt@reqres.in'

inputpass.type = 'password'
inputpass.placeholder = 'password'
inputpass.value = 'cityslicka'

submit.innerHTML = 'ingresar'

form.append(inputtEmail, inputpass, submit)

document.querySelector('body').append(form)

// streams

const submitform$ = fromEvent(form, 'submit')
.pipe(
    tap(ev => ev.preventDefault),
     map( ev => ({
         email: ev.target[0].value,
         password: ev.target[1].value
     })),
    //  mergeMap(peticionesHttpLogin)  
    // switchMap(peticionesHttpLogin)
    exhaustMap(peticionesHttpLogin)  
 )
submitform$.subscribe(token => console.log(token))
