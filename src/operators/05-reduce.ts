import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";




const numbers = [1,2,3,4,5,6];

const totalRed = (acumulador: number, valorActual: number) => {
        return acumulador + valorActual
}

const total = numbers.reduce(totalRed, 0)

interval(1000).pipe(
    take(3),   // le dices  cuantos valores toma
    tap(console.log),
    reduce(totalRed)  // si no le mando el valor inicial lo toma como cero.
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('completado')
})