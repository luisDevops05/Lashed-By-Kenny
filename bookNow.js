
 
let alertMsg = document.querySelector('.alertChild')
let dynamicP = document.querySelector('.dynamicP')





if (confirm("By pressing ok you are agreeing to have read all terms and policies ") == true) {
    console.log('true');
    alertMsg.style.display='block'
} else {
    alertMsg.style.display='block'
    dynamicP.innerHTML = 'You have not read the terms and policies, please go back and read them as they are strictly enforced. Thank you'
    
}
