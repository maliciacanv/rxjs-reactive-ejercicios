
// referencias

import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, pluck, mergeAll } from "rxjs/operators";
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
    map<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
     )),
     mergeAll<GithubUsersResp>(),
     pluck<GithubUsersResp, GitUser[]>('items')
).subscribe( mostrarUsuarios)






