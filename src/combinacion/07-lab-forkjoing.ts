import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";



const github_api_url = 'https://api.github.com/users'

const github_user = 'klerith';

forkJoin({ 
    usuario: ajax.getJSON(`${github_api_url}/${github_user}`),
    repos: ajax.getJSON(`${github_api_url}/${github_user}/repos`).pipe(
        catchError( err => of([]))
    ),
    gists: ajax.getJSON(`${github_api_url}/${github_user}/gists`)

}).pipe(
    catchError( err => of(err))
).subscribe(console.log)
