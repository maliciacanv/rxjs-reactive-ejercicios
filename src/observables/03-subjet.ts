import { Observable, Observer, Subject, Subscription} from 'rxjs';

// cuando algo viene de rxjs es algo para crear observable
const observer: Observer<any> = {
    next: valor => console.log('next', valor),
    error: error => console.log('error', error),
    complete: () => console.info('completado')
};

// subject un tipo especial de observable
const intervalo$ = new Observable<number>(subs => {
   const intervalID = setInterval(() => subs.next(Math.random()), 1000);

   return () => {
       clearInterval(intervalID)
       console.log('intervalo destruido')
   }
});

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd));

/**
 * 1- casteo multiple : muchas subscribes estan sujectas a la misma observable y
 * sirve para distribuir la misma informacion a todos donde estan subscritos.
 * 2- tambien es un observer
 * 3- next, error y complete 
 */
const subject$ = new Subject();
const subcription =  intervalo$.subscribe(subject$);

// const subs1 = subject$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = subject$.subscribe(rnd => console.log('subs2', rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);



setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subcription.unsubscribe();
}, 3500)