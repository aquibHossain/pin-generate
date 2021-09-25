function generate()
{
    const pin=Math.round(Math.random()*10000)
    const pinNumber=pin.toString().length
    if(pinNumber==4)
    {
      document.getElementById("generate-text").value=pin  
    }
    else
    {
         generate();
    }
}

document.getElementById("generate-button").addEventListener("click",function(){
   generate()
})

document.getElementById("number-module").addEventListener("click",function (event) {
  const number=event.target.innerText
  const typedPinText= document.getElementById("typed-pin")
      if(isNaN(number))
      {
        if(number=='C')
        {
          typedPinText.value=''
        }
      }
      else{
       const prevNumber=typedPinText.value
       const total=prevNumber+number
       typedPinText.value=total   
      }
     
})

document.getElementById("submit-button").addEventListener("click",function () {
  const success= document.getElementById("success")
  const failure= document.getElementById("fail")
  if(document.getElementById("generate-text").value==document.getElementById("typed-pin").value){
     success.style.display="block"
     failure.style.display="none"
  }
  else{
    failure.style.display="block"
    success.style.display="none"
  }
})