function validate(n)
{
    if(n>0)
        return true;
    else
        return false;

}
function calculate_mul_sum(){

    var n=Number(document.getElementById("input_box").value);
    validate(n);
    var sum=0;
    for(i=1;i<n;i++)
    {
        if(i%3==0||i%5==0)
        {
            sum+=i;
        }
    }
    document.getElementById("display").innerHTML=sum;
}