import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

// const numeros$ = of(1,2,3).pipe(
//     startWith(0)
// )

// numeros$.subscribe(console.log)

// endwith

const numeros$ = of(1,2,3).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
)

numeros$.subscribe(console.log)






