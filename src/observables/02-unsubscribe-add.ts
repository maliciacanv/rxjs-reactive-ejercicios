import { Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('next', valor),
    error: error => console.log('error', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {
    // crear un contador 123456
    let count = 0;
    const interval = setInterval(() => {
        // cada segundo
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
        console.log('comple')
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');
    }
})

// const subs1 =  intervalo$.subscribe(num => console.log('num', num));
// const subs2 =  intervalo$.subscribe(num => console.log('num', num));
// const subs3 =  intervalo$.subscribe(num => console.log('num', num));
const subs1 =  intervalo$.subscribe(observer);
const subs2 =  intervalo$.subscribe(observer);
const subs3 =  intervalo$.subscribe(observer);

subs1.add(subs2)
        .add(subs3)

setTimeout(() => {
    subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()

    console.log('completado')

}, 3000)
// para prevenir fugas de memoria
