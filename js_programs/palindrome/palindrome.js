
function initiate()
{
    var str=document.getElementById("input_box").value;
    palindrome(str);
}
function palindrome(str)
{
    var flag=false;
    for(i=0,j=str.length;i<j;i++,j--)
    {
        if(str.charAt(i)==str.charAt(j-1)){
            
            flag=true;
        }
        else
        {
            flag=false;
            break;
        }
    }
    if(flag==false)
        document.getElementById("display").innerHTML="not palindrome";
    else
        document.getElementById("display").innerHTML="palindrome";
    return flag;
}