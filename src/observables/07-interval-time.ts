import { interval, timer } from 'rxjs'

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
    
}

const hoyen5 = new Date(); // ahora
hoyen5.setSeconds(hoyen5.getSeconds() + 5)


const interval$ = interval(1000);
// const timer$ = timer(2000)
// // const timer$ = timer(2000, 1000) hace que en 2 seg inicio el interval
const timer$ = timer(hoyen5)


console.log('ini');

// interval$.subscribe(observer)

timer$.subscribe(observer)

console.log('fin');

// son asincronos por naturaleza
// el primer valor de interval y timer emiten 0
