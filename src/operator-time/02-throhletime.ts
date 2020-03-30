import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

// para controlor los observables q emiten valores frecuentemente
click$.pipe(
    throttleTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log)

// ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log)

// input$.pipe(
//     debounceTime(1000),
//     pluck('target', 'value'),
//     distinctUntilChanged()
// ).subscribe(console.log)
