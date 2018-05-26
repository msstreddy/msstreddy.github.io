function validate(n)
{
    if(n>0)
        return true;
    else
        return false;

}
function fizz_buzz(){

    var n=Number(document.getElementById("input_box").value);
    validate(n);
    var string="";
    for(i=1;i<n;i++)
    {
        if(i%3==0 && i%5!=0)
        {
            string+="fizz,";
        }
        else if(i%5==0 && i%3!=0)
        {
            string+="buzz,";
        }
        else if(i%5==0 && i%3==0)
        {
            string+="fizzbuzz,";
        }
        else
            string+=i+",";
        
    }
    document.getElementById("display").innerHTML=string.substr(0,string.length-1)+".";
}