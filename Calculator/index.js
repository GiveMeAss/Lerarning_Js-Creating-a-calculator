function display(val)
{
    document.getElementById("input-screen").value+=val;
}

function clr(){
    var c = "";
    document.getElementById("input-screen").value = c;
}
function equal()
{
    var a = document.getElementById("input-screen").value;
    var res = eval(a);
    document.getElementById("input-screen").value = res;
}
function power_equal()
{
    var a = document.getElementById("input-screen").value;
    var res = a.split("^");
    var cal = Math.pow(res[0],res[1]);
    document.getElementById("input-screen").value = cal;
}
function percentage()
{
    let a =document.getElementById("input-screen").value;
    let res = eval(a);
    let per = res/100;
    document.getElementById("input-screen").value = per;
}
function cosine()
{
    var a = document.getElementById("input-screen").value;
    var res = Math.cos(a);
    document.getElementById("input-screen").value = res;
}
function sine()
{
    var a = document.getElementById("input-screen").value;
    var res = Math.sin(a);
    document.getElementById("input-screen").value = res;
}
function tangent()
{
    var a = document.getElementById("input-screen").value;
    var res = Math.tan(a);
    document.getElementById("input-screen").value = res;
}
function square_root()
{
    var a = document.getElementById("input-screen").value;
    var res = Math.sqrt(a);
    document.getElementById("input-screen").value = res;
}
function clr_one()
{
    var a = document.getElementById("input-screen").value;
    var len = a.length;
    var ret_val = a.substr(0, len - 1);
    document.getElementById("input-screen").value = ret_val;
}