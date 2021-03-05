 $("#choose").change(function () {
        if($(this).val() == "0") $(this).addClass("empty");
        else $(this).removeClass("empty")
    });
$("#choose").change();


function preview_image(event)
{
    var reader = new FileReader();
    reader.onload = function()
    {
        var output = document.getElementById('output_image');
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}

 function myfun() {
     var a = document.getElementById("password").value;
     var b = document.getElementById("cpassword").value;

     if(a.length <= 7 ){
         document.getElementById("messages").innerHTML="** Password length is less than 8";
         return false;
     }
     if(a.length >= 25 ){
         document.getElementById("messages").innerHTML="** Password length is not more than 25";
         return false;
     }

     if(a!=b){
         document.getElementById("messages").innerHTML="** Both passwords doesn't match, try again";
         return false;
     }

 }


 $(function() {

     $("form[name='registration']").validate({
         rules: {

             firstname: {
                 required: true,
                 minlength: 5,
                 maxlength: 15
             },
             lastname: {
                 required: true,
                 minlength: 5,
                 maxlength: 15
             },
             fathername: {
                 required: true,
                 minlength: 15 ,
                 maxlength: 20
             },
             mothername: {
                 required: true,
                 minlength: 15 ,
                 maxlength: 20
             },
             dob: {
                 required: true
             },
             gender: {
                 required: true
             },
             email: {
                 required: true,
                 email: true
             },
             mobile: {
                 required: true,
                 minlength: 10,
                 maxlength: 10
             },
             cpassword: {
                 required: true,
                 minlength: 8,
                 maxlength:20
             },
             address: {
                 required: true,
                 minlength: 10,
                 maxlength: 50
             },
             roll: {
                 required: true,
                 minlength:2
             },
             language: {
                 required: true,
             }
         },
         // Specify validation error messages
         messages: {


             firstname: {
                 required: "please enter first name",
                 minlength: "first name greater than 4 digit",
                 maxlength: "first name less than 16 digit"
             },
             lastname: {
                 required: "please enter last name",
                 minlength: "last name greater than 4 digit",
                 maxlength: "last name less than 16 digit"
             },
             fathername: {
                 required: "please enter father's name",
                 minlength: "faher's name greater than 14 digit" ,
                 maxlength: "father's  name less than 21 digit"
             },
             mothername: {
                 required: "please enter mother's name",
                 minlength: "mother's name greater than 14 digit" ,
                 maxlength: "mother's  name less than 21 digit"
             },
             dob: {
                 required: "please enter date of birth"
             },
             gender: {
                 required: "please enter gender"
             },
             email: {
                 required: "please enter email address",
                 // Specify that email should be validated
                 // by the built-in "email" rule
                 email: "Please enter a valid email address"
             },
             mobile: {
                 required: "please enter mobile number",
                 minlength: "Please enter a valid mobile number",
                 maxlength: "Please enter a valid mobile number"
             },
             cpassword: {
                 required: "Please confirm password",
                 minlength: "minimum 8 digit password required",
                 maxlength: "less than 20 digit password"
             },
             address: {
                 required: "Enter Address",
                 minlength: "more than 10 digit",
                 maxlength: "less than 50 digit"
             },
             image: {
                 required: "upload image"
             },
             highedu: {
                 required: "select higher education"
             },
             roll: {
                 required: "enter roll number",
                 minlength: "minimum 2 digit"
             },
             percentage: {
                 required: "enter percentage",
             },
             language: {
                 required: true,
             },
         // Make sure the form is submitted to the destination defined
         // in the "action" attribute of the form when valid
         submitHandler: function(form) {
             form.submit();
         }
		 }
     });
 });
