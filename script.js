 const inputEle = document.querySelector('#user-input')
 const checkBtn = document.querySelector('#check-btn')
 const clearBtn = document.querySelector("#clear-btn")
 const resultDisplay = document.querySelector("#results-div")
function telephoneCheck(str) {
    
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    
    if(inputEle.value === ''){
        alert("Please provide a phone number")
        return
    }
        
    if(regex.test(str)){
        resultDisplay.innerText = `Valid US number:\n ${inputEle.value}`
            return
    }else{
        resultDisplay.innerText = `Invalid US number:\n ${inputEle.value}`
            return
    }         
}
    
    function userInput(){
        telephoneCheck(inputEle.value)
        inputEle.value=""
    }

checkBtn.addEventListener('click', userInput)
clearBtn.addEventListener('click', function(){
        resultDisplay.textContent=''
        
    })
 