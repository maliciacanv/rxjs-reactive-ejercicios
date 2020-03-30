import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";


const letras$ = of('a', 'b', 'c');


letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    )
))
// .subscribe({
//     next: val => console.log('val', val),
//     complete: () => console.log('complete')
// });


const mouseDown$ = fromEvent(document, 'mousedown')
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
)
.subscribe(console.log)





// referencias

import { Observable } from "rxjs";
import { debounceTime, pluck, mergeAll } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUsersResp, GitUser } from "../interface/github-users.interface";

const body  = document.querySelector('body');
const textInput = document.createElement('input');
const orderlist = document.createElement('ol');
body.append(textInput, orderlist);

// helpers 

const mostrarUsuarios = (usuarios: GitUser[]) => {
    orderlist.innerHTML = '';
    for ( const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url
        anchor.text = 'ver pagina'
        anchor.target = '_blank'

        li.append(img)
        li.append(usuario.login + '')
        li.append(anchor)

        orderlist.append(li)

    }
}

// streams

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')

input$.pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
     )),
     pluck<GithubUsersResp, GitUser[]>('items')
).subscribe( mostrarUsuarios)

// cambio de mergemap para mergeAll

// otro ejercio

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    mergeMap( texto => ajax.getJSON(url + texto))
).subscribe( console.log)

// el mergeMap no sirve cuando emite miles de obervables basura
