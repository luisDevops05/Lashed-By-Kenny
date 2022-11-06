
 
let alertMsg = document.querySelector('.alertChild')
let dynamicP = document.querySelector('.dynamicP')
let locations = document.querySelector('.locations')
let locationMsg = document.querySelector('.selectLoc')

let rvaBtn = document.getElementById('rva')
let nova = document.getElementById('nova')

let calCon = document.getElementById('calConMain')
let calCon2 = document.getElementById('calConMain2')


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

dynamicCalander = function(){

rvaBtn.addEventListener('click',function(){
console.log('rva btn is working')

if(rvaBtn){
    calCon.style.display='block'
}


    

})

nova.addEventListener('click',function(){
    calCon2.style.display='block'
})











}



// dynamicCalander()


// alertMsg.style.display='block'
// locationMsg.style.display='block'
// locations.style.display='flex'


alertMessages()