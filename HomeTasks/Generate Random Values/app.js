function userFun() {
    let num = [];
    for (let i = 0; i < 10; i++) {
        num[i] = Math.floor(Math.random() * 50);
    }

    const buttonId = this.id;

    switch (buttonId) {
        case "tempButton":
            document.getElementById("tempResult").innerHTML = num.map(number => `<p>${number}</p>`).join('');
            break;
        case "saleButton":
            document.getElementById("saleResult").innerHTML = num.map(number => `<p>${number}</p>`).join('');
            break;
        case "speedButton":
            document.getElementById("speedResult").innerHTML = num.map(number => `<p>${number}</p>`).join('');
            break;
        default:
            break;
    }
}

const tempButton = document.getElementById("tempButton");
tempButton.addEventListener('click', userFun);

const saleButton = document.getElementById("saleButton");
saleButton.addEventListener('click', userFun);

const speedButton = document.getElementById("speedButton");
speedButton.addEventListener('click', userFun);
