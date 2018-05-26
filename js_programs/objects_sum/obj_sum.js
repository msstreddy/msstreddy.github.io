arr=[];
function obj_sum()
{
    var sum=0;
    for(i=0;i<arr.length;i++)
    {
       sum+=Number(arr[i].val); 
    }
    document.getElementById("display").innerHTML=sum;

}
function add()
{
    var name=document.getElementById("name").value;
    var amount=document.getElementById("amount").value;
    arr.push({key:name,val:amount});
    document.getElementById("display").innerHTML="details added";
}