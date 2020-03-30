import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.get(url)

ajax.post( url, {
    id: 1,
    nombre: 'malicia'
}, {
    'mi-token': 'abc123'
}).subscribe(console.log)

ajax.put( url, {
    id: 1,
    nombre: 'malicia'
}, {
    'mi-token': 'abc123'
}).subscribe(console.log)

ajax.delete( url, {
    id: 1,
    nombre: 'malicia'
}).subscribe(console.log)

ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'abc'
    },
    body: {
        id: 1,
        nombre: 'mali'
    }
}).subscribe(console.log);
