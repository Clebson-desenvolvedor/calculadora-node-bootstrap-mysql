var nOne = '0'
var operation = null
var nTwo = ''
var clickedEqual = false
var list = ''
var listEval = 0

function showDisplay(v){
    document.querySelector('#display').innerHTML = v
}

function includeDigit(d){
    if(nTwo && operation && clickedEqual){
        clickedEqual = false
        clearDisplay()
        nOne = d
        showDisplay(nOne)
        return
    }
    if(operation !== null) {
        nTwo += d
        showDisplay(nTwo)
    } else{
        if(nOne === '0') {
            nOne = d
        } else {
            nOne += d
        }
        showDisplay(nOne)
    }
}

function calculate(){
    var nCalculated = 0
    var _nOne = parseFloat(nOne)
    var _nTwo = parseFloat(nTwo)
    switch(operation){
        case '+':
            nCalculated = _nOne + _nTwo
            break;
        case '-':
            nCalculated = _nOne - _nTwo
            break;
        case '/':
            nCalculated = _nOne / _nTwo
            break;
        case '*':
            nCalculated = _nOne * _nTwo
            break;
        }
    return nCalculated
}


function startCalculating(simb){
    if(clickedEqual){
        clickedEqual = false
        nTwo = ''
    }
    if(operation === null || nTwo === ''){
        operation = simb
    } else{
        var result = calculate()
        nOne = result
        operation = simb
        nTwo = ''
        showDisplay(nOne)
    }
    console.log(nOne, operation, nTwo)
}

function finishCalculating(){
    clickedEqual = true
    var result = calculate()
    nOne = result
    showDisplay(nOne)
    
}

    function includePoint(){
        if(operation && nTwo === ''){
            nTwo = '0.'
        } else if(operation && nTwo){
            nTwo += '.'       
        } else{
            nOne += '.'
        }
    }

    function clearDisplay(){
        nOne = '0'
        operation = null
        nTwo = ''
        listEval = 0
        list = ''
        showDisplay(nOne)
    }

    function fList(n){
        if(list === '' && n === '.'){
            list += '0.'
        } else{
            list += n
        }
        
    }

    function finishList () {
        listEval = eval(list)
        list = `${list}=${listEval}`
        document.querySelector('#inputList').value = list
    }