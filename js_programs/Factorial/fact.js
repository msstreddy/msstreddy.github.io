function validate(n)
{
    
    if(n>=0)
        return true;
    return false;
}
function calculate_fact()
{
    var fact=1;
    var n=document.getElementById("input_box").value;
    if(validate(n))
    {
        for(i=1;i<=n;i++)
        {
            fact=fact*i;
        }
        document.getElementById("display").innerHTML=fact;
    }
    else
        document.getElementById("display").innerHTML="please provide valid number";

}