var plainContent='';
var encryptText='';
var decryptText='';
var globalText='';
var key=5;


function readFile(){
    const fileInput=document.getElementById("textFile");
    const file=fileInput.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload=function(e){
            plainContent=e.target.result;
            document.getElementById("fileContent").innerHTML=plainContent;
        }
        reader.readAsText(file);
    }
}


function encrypt(){

    for(let i=0;i<plainContent.length;i++){
    encryptCharacters=plainContent.charCodeAt(i)+key;
    eText=String.fromCharCode(encryptCharacters);
    encryptText+=eText
}
decryptText='';
globalText=encryptText;
document.getElementById("globalText").innerHTML=globalText;
console.log(encryptText);
}

function decrypt(){
for(let i=0;i<encryptText.length;i++){
    decryptCharacters=encryptText.charCodeAt(i)-key;
    dText=String.fromCharCode(decryptCharacters);
    decryptText+=dText
}
encryptText='';
globalText=decryptText;
document.getElementById("globalText").innerHTML=globalText;
console.log(decryptText);
}


function writeFile(){
   let fileName=document.getElementById("fileName").value;
   let txtCode="data:text/plain; charset=utf-8,";
   txtCode+=globalText;
   let encodedURI=encodeURI(txtCode);
   let link=document.createElement("a");
   link.setAttribute("href",encodedURI);
   link.setAttribute("download",`${fileName}.txt`);
   document.body.appendChild(link);
   link.click();
}