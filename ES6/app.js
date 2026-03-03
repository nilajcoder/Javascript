

/*

In ES Modules, import means:

Bring code (variables, functions, classes, values) from another file into the current file.

If export makes something public,
👉 import is how you access it.
*/

import { add, sub } from "./export.js";


console.log(add(2,3))
console.log(sub(5,2))