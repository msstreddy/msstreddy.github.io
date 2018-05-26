function validate(n)
{
    if(n>1)
        return true;
    else
        return false;

}
function calculate_closest(){

    var n=Number(document.getElementById("input_box").value);
    var sum=2,count=1;
    if(validate(n))
    {
         while(sum<=n)
        {
            sum*=2;
            count++;
        }
    document.getElementById("display").innerHTML=count-1;
    }
    else
     document.getElementById("display").innerHTML="please enter valid input";
}