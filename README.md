# mcflurry

destructuring an object in function arguments is fun and v flexible, but it
means you can't build up the arguments over time using `curry()` and v sad.

so mcflurry lets you do this

```js
const mcflurry = require('mcflurry')
const objectLog = mcflurry(console.log)
objectLog({a: 22})({b: 47})({c: 'dog', a: 1})() //=> {a:22, b:47, c:'dog'}
```

yes unfortunately it can't magically know when the function is fully satisfied,
the only way to do that would be to supply a list of the keys that needed to be
present separately as strings. that seemed more gross.

ruby has `method(:lol).parameters` which would allow you to do it there, but not
in js in any way i could think of

so i've opted for calling it with no arguments when you're done

anyway thanks everybody bye
