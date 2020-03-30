import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('sigueinte', valor),
    error: error => console.log('error: obs', error),
    complete: () => console.info('completado obs')
}

// para crear observables

// const obs$ = Observable.create();

const obs$ = new Observable<string>( subs => {
    subs.next('hola');
    subs.next('mundo');
    subs.next('hola');
    subs.next('mundo');

    // forzar un error
    // const a = undefined;
    // a.nombre = 'mali';

    subs.complete();

    subs.next('mundo');

});

// obs$.subscribe(console.log);

// obs$.subscribe(resp => {
//     console.log(resp)
// });

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.log('error', error),
//     () => console.info('completado')
// );

obs$.subscribe(observer);
