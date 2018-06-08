function validate(){
    console.log('inside validate');
     firstName=$("#firstName").val();
     fullName=$("#fullName").val();
     designation=$("#designation").val();
     employee_code=$("#employee_code").val();
     blood_grp=$("#blood_grp").val();
     reason=$("#reason").val();
     email=$("#email").val();
     date_of_emp=$("#date_of_emp").val();
     mobile_num=$("#mobile_num").val();
     emg_cnct=$("#emg_cnct").val();
     flag=true;
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
    if(!(/^\d{7}$/.test(employee_code)))
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
    if(flag)
        send_post();

    
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
     
    console.log("inside post");
    const data={
        firstName:firstName,
        fullName:fullName,
        designation:designation,
        employee_code:employee_code,
        blood_grp:blood_grp,
        reason:reason,
        email:email,
        date_of_emp:date_of_emp,
        mobile_num:mobile_num,
        emg_cnct:emg_cnct
    }
    $.ajax({
        type: 'POST',
        url: `https://id-application-15904.firebaseio.com/id-application.json`,
        data:JSON.stringify(data),
        success : function(data){
         console.log('inside success');
         alert("Form submitted!!!!!");
         $("input").val().change()="";
         $("se").val().change()="";
        },
        error :function(err){
        }

    });
}