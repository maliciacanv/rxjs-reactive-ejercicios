import { of, from} from 'rxjs';

/**    
 * of = toma argumentos y genera una secuencia
 * from = array promise iterable observable
 */

 const observer = {
     next:  val => console.log('next:', val),
     complete: () => console.log('complete')
 }

 // * fn generadora iterable
 const migenerador = function*() {
yield 1;
yield 2;
yield 3;

 }

 const miIterable  = migenerador();

 from(miIterable).subscribe(observer)

//  const source$ = from([1,2,3,4,5]);
//  const source$ = of([1,2,3,4,5]);
//  const source$ = from('fernando');
const source$ = from(fetch('hhtps://api.github.com/users/klerith'));

// source$.subscribe(async(resp) => {
//     console.log(resp.url);

//     const datar = await resp.json();
//     console.log(datar);
    
    
// })
// source$.subscribe(observer)