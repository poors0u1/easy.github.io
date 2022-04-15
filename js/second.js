function check()
{
    var inp = document.getElementsByName('radio');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            if(inp[i].value == "one") {
                document.querySelector('.text').innerHTML = 'Ты ответил правильно! Молодец!';
                document.getElementById("text").style.color = "green";
            }
            else {
                document.querySelector('.text').innerHTML = 'Ты ответил неправильно. Правильный ответ: құн!';
                document.getElementById("text").style.color = "red";

        }
    }
}
};

function vis(){
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn1").disabled = true;
    document.getElementById("first").disabled = true;
    document.getElementById("second").disabled = true;
    document.getElementById("third").disabled = true;
};
