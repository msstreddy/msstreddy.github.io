$('.error').hide();
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
    $(".error").hide();
    if(!verify_text(firstName))
    {
        flag=false;
        $("#firstName").addClass("border_style");
        $("#firstName_error").show();

    }
    if(!verify_text(fullName))
    {
        flag=false;
        $('#fullName').addClass("border_style");
        $("#fullName_error").show();
    }
    if(!verify_text(designation))
    {
        flag=false;
        $('#designation').addClass("border_style");
        $("#designation_error").show();
    }
    if(!(/^\d{7}$/.test(employee_code)))
    {
        flag=false;
        $('#employee_code').addClass("border_style");
        $("#employee_code_error").show();
    }
    if(blood_grp==null)
    {
        flag=false;
        $('#blood_grp').addClass("border_style");
        $("#blood_grp_error").show();
    }
    if(reason==null)
    {
        flag=false;
        $('#reason').addClass("border_style");
        $("#reason_error").show();
    }
    if(!(/^\d{10}$/.test(mobile_num)))
    {
        flag=false;
        $('#mobile_num').addClass("border_style");
        $("#mobile_num_error").show();
    }
    if(!(/^\d{10}$/.test(emg_cnct)))
    {
        flag=false;
        $('#emg_cnct').addClass("border_style");
        $("#emg_cnct_error").show();
    }
    if(!(/^[a-zA-Z][a-zA-Z0-9]{5,}@virtusa.com$/.test(email)))
    {
        flag=false;
        $('#email').addClass("border_style");
        $("#email_error").show();
    }
    if(date_of_emp=="")
    {
        flag=false;
        $('#date_of_emp').addClass("border_style");
        $("#date_of_emp_error").show();
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