function fizzBuzz() {
    let fb = new Array(100);
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            fb.push("FizzBuzz");
        } else if (i % 3 === 0) {
            fb.push("Fizz");
        } else if (i % 5 === 0) {
            fb.push("Buzz");
        } else {
            fb.push(i);
        }
    }
    return fb
}


console.log(fizzBuzz());