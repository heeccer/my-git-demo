console.log('b文件实现了斐波拉契数列');

// 斐波拉契数列
export const fibonacci = (n) => {
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(20));
console.log(fibonacci(100));
