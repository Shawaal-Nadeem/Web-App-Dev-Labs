function encryption(){
    let mesInput=document.getElementById("eMessageInput").value
    let kInput=parseInt(document.getElementById("eKeyInput").value);
    let mesLength=mesInput.length;
    let eMessage='';

    for(i=0;i<mesLength;i++){
        const charCode=mesInput.charCodeAt(i);
        const addKeywithChar=charCode+kInput;
        const encrypChar=String.fromCharCode(addKeywithChar)
        eMessage+=encrypChar
    }
    console.log(eMessage);
    document.getElementById("encryptMessage").innerHTML=eMessage    
}

function decryption(){
    let mesInput=document.getElementById("dMessageInput").value
    let kInput=parseInt(document.getElementById("dKeyInput").value);
    let mesLength=mesInput.length;
    let dMessage='';

    for(i=0;i<mesLength;i++){
        const charCode=mesInput.charCodeAt(i);
        const addKeywithChar=charCode-kInput;
        const encrypChar=String.fromCharCode(addKeywithChar)
        dMessage+=encrypChar
    }
    console.log(dMessage);
    document.getElementById("decryptMessage").innerHTML=dMessage    
}