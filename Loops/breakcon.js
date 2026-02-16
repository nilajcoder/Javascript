

/*

1️⃣ break Statement
🔹 Purpose

Immediately terminates the loop (or switch statement).
*/

console.log("Break in While ")
let i = 1;

while (i <= 5) {
    if (i === 3) {
        break;
    }
    console.log(i);
    i++;
}

console.log("Break in For loop")
for (let i = 1; i <= 5; i++) {
    if (i === 4) {
        break;
    }
    console.log(i);
}

/*
2️⃣ continue Statement
🔹 Purpose

Skips the current iteration and moves to the next iteration.
*/

console.log("Continue")
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
