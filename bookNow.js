
 
let alertMsg = document.querySelector('.alertChild')
let dynamicP = document.querySelector('.dynamicP')


let alertCon = document.querySelector('.alertCon')





let alertMessages = function(){
if (confirm("By pressing ok you are agreeing to have read all terms and policies ") == true) {
    console.log('true');
    alertMsg.style.display='block'
} else {
    alertMsg.style.display='block'
    dynamicP.innerHTML = 'You have not read the terms and policies, please go back and read them as they are strictly enforced. Thank you'
alertCon.style.gridTemplateRows = '150px'
    
}  
}

    let rvaUrl ='https://calendly.com/testingcalen123/30min?background_color=1a1a1a&text_color=ffffff&primary_color=e0afce'
    
    let novaUrl ='https://calendly.com/testingcalen123/nova'
    





 

  

// alertMsg.style.display='block'
// locationMsg.style.display='block'
// locations.style.display='flex'


alertMessages()