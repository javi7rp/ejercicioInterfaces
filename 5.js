function Factorial(n){
    if(n <= 1){
        return 1;
    }else{
        let f = 1;
        for (let i = 2; i<=n; i++){
            f = f*i;
        }
        return f;
    }
}

const n = 8;
console.log('El factorial de',n,'es:', Factorial(n));

