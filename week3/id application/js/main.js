function validate(){
    console.log('inside validate');
    var firstName=$("#firstName").val();
    var fullName=$("#fullName").val();
    var designation=$("#designation").val();
    var employee_code=$("#employee_code").val();
    var blood_grp=$("#blood_grp").val();
    var reason=$("#reason").val();
    var email=$("#email").val();
    var date_of_emp=$("#date_of_emp").val();
    var mobile_num=$("#mobile_num").val();
    var emg_cnct=$("#emg_cnct").val();
    var flag=true;
    $("input").removeClass("border_style");
    $("select").removeClass("border_style");
    if(!verify_text(firstName))
    {
        flag=false;
        $("#firstName").addClass("border_style");
    }
    if(!verify_text(fullName))
    {
        flag=false;
        $('#fullName').addClass("border_style");
    }
    if(!verify_text(designation))
    {
        flag=false;
        $('#designation').addClass("border_style");
    }
    if(!(/^\d{10}$/.test(employee_code)))
    {
        flag=false;
        $('#employee_code').addClass("border_style");
    }
    if(blood_grp==null)
    {
        flag=false;
        $('#blood_grp').addClass("border_style");
    }
    if(reason==null)
    {
        flag=false;
        $('#reason').addClass("border_style");
    }
    if(!(/^\d{10}$/.test(mobile_num)))
    {
        flag=false;
        $('#mobile_num').addClass("border_style");
    }
    if(!(/^\d{10}$/.test(emg_cnct)))
    {
        flag=false;
        $('#emg_cnct').addClass("border_style");
    }
    if(!(/^[a-zA-Z][a-zA-Z0-9]{5,}@virtusa.com$/.test(email)))
    {
        flag=false;
        $('#email').addClass("border_style");
    }
    if(date_of_emp=="")
    {
        flag=false;
        $('#date_of_emp').addClass("border_style");
    }

    
}
function verify_text(data)
{
    if((/^[a-zA-Z ]+$/.test(data)))
    {
        return true;
    }
        return false;
}
function send_post()
{
    var FirstName=$("#firstName").val();
    var FullName=$("#fullName").val();
    console.log("inside post");
    const data={
        firstName:FirstName,
        lastName:FullName
    }
    $.ajax({
        type: 'POST',
        url: `https://id-application-15904.firebaseio.com/id-application.json`,
        data:JSON.stringify(data),
        success : function(data){
         console.log('inside success');
        },
        error :function(err){
        }

    });
}