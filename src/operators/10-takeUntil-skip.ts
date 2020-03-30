import { interval, fromEvent } from "rxjs";
import { takeUntil, tap, skip } from "rxjs/operators";

const boton = document.createElement('button');
boton.innerHTML = 'detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    // omite la cantidad de click
    skip(1),
    tap(() => console.log('tap despues de skip'))
)


counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log(val),
    complete: () => console.log('complete')
});

