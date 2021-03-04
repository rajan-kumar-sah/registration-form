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