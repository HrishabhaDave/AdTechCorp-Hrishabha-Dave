var arr = [];
var size = prompt();
size=parseInt(size);

for(let x=0;x<size;x++)
{
    arr[x]=prompt();
    arr[x]=parseInt(arr[x]);
}
console.log(arr);

for(let i=0;i<size;i++)
{
    let count=0;
    for(let j=i;j<size;j++)
    {
        if(arr[i]==arr[j])
        {
            count++;
        }
    }
    if(count==2)
    {
        console.log("Repeated Number is: "+arr[i]);
        break;
    }
}
