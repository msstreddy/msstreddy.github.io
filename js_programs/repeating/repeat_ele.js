
function repeat_ele(){

    var str=document.getElementById("input_box").value;
    var dis="";
    str=str.replace(/[^0-9,]/g,'');
    var arr=str.split(",");
     arr=arr.sort();
     for(i=0;i<arr.length-1;i++)
     {
         if(Number(arr[i])==Number(arr[i+1]))
         {
             while(Number(arr[i])==Number(arr[i+1]))
             {
                 i++;
             }
             dis+=" "+arr[i];
         }
     }
    document.getElementById("display").innerHTML=dis;
}