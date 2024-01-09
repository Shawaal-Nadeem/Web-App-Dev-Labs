
function userFun(){
    let num=Math.floor(Math.random()*5);
    alert(`Output is : ${num}`)
}



const callmyFun=document.getElementById("myfunc");
callmyFun.addEventListener('click',userFun)