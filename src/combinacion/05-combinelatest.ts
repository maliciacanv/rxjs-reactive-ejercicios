
import { fromEvent, merge, combineLatest } from "rxjs";
import { pluck } from "rxjs/operators";



// const keyup$ = fromEvent(document, 'keyup')
// const click$ = fromEvent(document, 'click')

// combineLatest(
//     keyup$.pipe( pluck('type')), 
//     click$.pipe(pluck('type')))

// .subscribe(console.log)

const textInput = document.createElement('input');
const textInput2 = document.createElement('input');

textInput.placeholder = 'email';

textInput2.placeholder = '***************';
textInput2.type = 'password'

document.querySelector('body').append(textInput, textInput2)

// helper

const getInputStream = (ele: HTMLElement) => {
    return fromEvent<KeyboardEvent>(ele, 'keyup').pipe(
        pluck<KeyboardEvent, string>('target', 'value')
    )
}

combineLatest(
    getInputStream(textInput),
    getInputStream(textInput2)
).subscribe(console.log)
