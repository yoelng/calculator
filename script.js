var memory=0;
var memorycal;
var c = false;
var flag = false;
var screen = function (p){
    if(p == '.' && flag == true){
        return;
    }
    if(c == true){
        $('#screen').val('');
        c = false;
    }
    var r = $('#screen').val('') + p ;
    if (p == '.'){
        flag = true;
    }else{
        r = r * 1;
    }
    $('#screen').val('');
} 
var calculate = function(p){
    if(memory){
        result();
    }
    flag = false;
    c = true;
    memory = $('#screen').val('');
    memorycal = p;
}
$('#clear').click(function(){
    memory = 0;
    $('#screen').val('');
});
$('#sign').click(function(){
    $('#screen').val($('#screen').val() * -1);
});
$('#backspace').click(function(){
    var len = $('#screen').val().length;
    $('#screen').val($('#screen').val().substring(0, len -1));
    if($('#screen').val().length == 0 )
    $('screen').val(0);
});
var result = function(){
    if(memory == 0)
    return;
    var r;
    switch(memorycal) {
        case '+':
        r = memory + $('#screen').val();
        break;
        case '-':
        r = memory - $('#screen').val();
        break;
        case '*':
        r = memory * $('#screen').val();
        break;
        case '/':
        r = memory / $('#screen').val();
        break;
       
    }
    screen(r);
    c = true;
    flag = false;
    memory = 0;
};
$('.digit').click(function(e){
    screen(e.target.value);
});
$('#divide,#multiply,#minus,#plus').click(function(e){
    calculate(e.target.value);
});
$('equal').click(function(){
    result();
});


