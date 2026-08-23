console.log('a文件实现了递归求和');

function a(...args){
  console.log(args)
}

// 递归求和函数
function sum(n){
    if(n === 1){
        return 1;
    }
    return n + sum(n - 1);
}

console.log(sum(100));