
var formVal;
var formVal2;
function viewNam(){
    formVal =document.getElementById('className').value;
    document.forms.getElementById('Myform').action='welcom.html';
}
function validate(){

document.getElementById('nn').innerHTML=formVal;
}
//console.log(formVal)


//console.log(formVal2)




/*The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:

document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";




<script>
function validate(){
formVal = document.getElementById('test').value;
var scrt_var=737;
document.forms["myForm"].action='http://www.example.com/viewdetails.php?id='+ scrt_var + '&page=' + formVal;
}

</script>

<FORM name="myForm" method="POST" action='http://www.example.com/viewdetails.php?id='+how to get scrt_var + '&page=' + how to get the text input; onsubmit="validate();">

<input type="text" id="test" value="">
<input type="submit" value="Submit">
</form>

*/  