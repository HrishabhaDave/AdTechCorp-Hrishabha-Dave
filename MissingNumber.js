var arr = [];
var size = prompt();
size=parseInt(size);
let missingNumber;

for(let i=0;i<size;i++)
{
    arr[i]=prompt();
    arr[i]=parseInt(arr[i]);
}

console.log(arr);
let x, sum=0;
for(x=0;x<size;x++)
{
    sum=sum+arr[x];
}

const result = (size*(size+1))/2;

missingNumber = result-sum;

console.log("missingNumber is: " + missingNumber);
