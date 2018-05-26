function validate(n)
{
    if(n>0)
        return true;
    else
        return false;

}
function calculate_sum(){

    var n=Number(document.getElementById("input_box").value);
    validate(n);
    document.getElementById("display").innerHTML=n*(n+1)/2;
}