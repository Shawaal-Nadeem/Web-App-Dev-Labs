function myFunction1(){
    alert("Function 1 called")
}

function myFunction2(){
    alert("Function 2 called")
}

const callF1=document.getElementById("myFunc1");
callF1.addEventListener('mouseover',myFunction1)

const callF2=document.getElementById("myFunc2");
callF2.addEventListener('click',myFunction2)