import { fromEvent } from 'rxjs';
import { debounceTime, first, pluck, distinctUntilKeyChanged, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(3000)
); // .subscribe(sonsole.log)

// ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log)
