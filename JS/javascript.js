const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")

// eventos
function generatorQrCode(){
   const qrCodeInputValue = qrCodeInput.value;
    if(!qrCodeInputValue) return;
  
    qrCodeBtn.innerText="Gerando Codigo..";

    qrCodeImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load",()=>{
        container.classList.add("active");
        qrCodeBtn.innerText="Codigo Gerado!!";
    })

    
}

qrCodeBtn.addEventListener("click",()=>{
    generatorQrCode();
})
qrCodeInput.addEventListener("keydown",(e)=>{
    if(e.code === "Enter"){
    generatorQrCode();
    }
})

qrCodeInput.addEventListener("keyup",()=>{
    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerText="Gerar QR code";
    }
})