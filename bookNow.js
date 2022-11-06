
 
let alertMsg = document.querySelector('.alertChild')
let dynamicP = document.querySelector('.dynamicP')
let locations = document.querySelector('.locations')
let locationBtn2 = document.querySelector('locc')
let locationMsg = document.querySelector('.selectLoc')



// alertMsg.style.display='block'

if (confirm("By pressing ok you are agreeing to have read all terms and policies ") == true) {
    console.log('true');
    alertMsg.style.display='block'
    locationMsg.style.display='block'
    // locationBtn1.style.display='block'
    // locationBtn2.style.display='block'
    locations.style.display='flex'
  
} else {
    alertMsg.style.display='block'
    dynamicP.innerHTML = 'You have not read the terms and policies, please go back and read them as they are strictly enforced. Thank you'
    
}
