function display(content){
    result.value +=content
}

function resetResult(){
    result.value = "" 
}

function expeEval(){
    try{result.value = eval(result.value)
}catch{
result.value = "invalid expression"
}
}

function removeLast(){
    result.value = result.value.slice(0,-1)
}
