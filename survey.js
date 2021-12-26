function check()
{
    var count=0;
    var q1=document.survey.question1.value;
    var q2=document.survey.question2.value;
    var q3=document.survey.question3.value;
    var q4=document.survey.question4.value;
    var q5=document.survey.question5.value;
    var q6=document.survey.question6.value;
    var q7=document.survey.question7.value;
    var q8=document.survey.question8.value;
    var q9=document.survey.question9.value;
    var q10=document.survey.question10.value;

    if(q1=="scripting"){
        count++
    }
    if(q2=="Float"){
        count++
    }
    if(q3=="Functions"){
        count++
    }
    if(q4=="H1"){
        count++
    }
    if(q5=="script"){
        count++
    }
    if(q6=="hyper"){
        count++
    }
    if(q7=="option4"){
        count++
    }
    if(q8=="c3"){
        count++
    }
    if(q9=="bg3"){
        count++
    }
    if(q10=="opacity"){
        count++
    }
    localStorage.setItem("score", count)
       document.write("Hey ", localStorage.getItem("username"), " your score is ",localStorage.getItem("score"),"/10" );
}
function store(){
    localStorage.setItem("username", document.getElementById('username').value)
}
