function validate(n)
{
    if(n>0)
        return true;
    else
        return false;

}
function pair_sum(){

    var n=document.getElementById("input_box").value;
    validate(n);
    var str=document.getElementById("input_box2").value;
    var dis="";
    str=str.replace(/[^0-9,]/g,'');
    var arr=str.split(",");
    for(i=0;i<arr.length;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            if((Number(arr[i])+Number(arr[j]))==n)
            {
                dis+="\""+arr[i]+" "+arr[j]+"\"<br>";
            }
        }
    }
    document.getElementById("display").innerHTML=dis;
}