
 
let alertMsg = document.querySelector('.alertChild')
let dynamicP = document.querySelector('.dynamicP')
let locations = document.querySelector('.locations')
let locationMsg = document.querySelector('.selectLoc')

let rvaBtn = document.getElementById('rva')
let nova = document.getElementById('nova')

let calCon = document.getElementById('calConMain')
let calCon2 = document.getElementById('calConMain2')

let rvaCalCon = document.getElementById('rvaMainCon')
let rvaCalCon2 = document.getElementById('rvaMainCon2')

rvaCalCon.style.display='none' 
rvaCalCon2.style.display='none' 







let alertMessages = function(){
if (confirm("By pressing ok you are agreeing to have read all terms and policies ") == true) {
    console.log('true');
    alertMsg.style.display='block'
    locationMsg.style.display='block'
    locations.style.display='flex'
} else {
    alertMsg.style.display='block'
    dynamicP.innerHTML = 'You have not read the terms and policies, please go back and read them as they are strictly enforced. Thank you'
    
}  
}

    let rvaUrl ='https://calendly.com/testingcalen123/30min?background_color=1a1a1a&text_color=ffffff&primary_color=e0afce'
    
    let novaUrl ='https://calendly.com/testingcalen123/nova'
    
rvaCalCon.setAttribute('data-url',rvaUrl)
rvaCalCon2.setAttribute('data-url',novaUrl)


nova.addEventListener('click',function(){

    if(nova = true){
              rvaCalCon2.style.display='block'
    }


  })



  rvaBtn.addEventListener('click',function(){
      console.log('working')
   
    
    if(rvaBtn = true){
        // console.log('hello')
           rvaCalCon.style.display='block'
    
    }


  })

  

// alertMsg.style.display='block'
// locationMsg.style.display='block'
// locations.style.display='flex'


alertMessages()