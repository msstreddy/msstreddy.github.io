
function only_palindrome()
{
    var str=document.getElementById("input_box").value;
    var arr=str.split(",");
    var div='';
    for(var i=0;i<arr.length;i++)
    {
        if(palindrome(arr[i])==1)
        {
            div+=arr[i]+" ";
        }
    }
    document.getElementById("display").innerHTML=div;
}
function palindrome(str)
{
    //alert(str);
    var flag=0;
   
    for(var i=0,j=str.length;i<j;i++,j--)
    {
        if(str[i]==str[j-1]){
            
            flag=1;
    
        }
        else
        {
            flag=0;
            break;
        }
    }
    
    return flag;
}
