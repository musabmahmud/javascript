function pinNumber(){
    let float = Math.random(4);
    let num = (float*8999) + 1000;
    let roundVal = Math.round(num);
    return roundVal;
}
function inputPin(num){
    document.getElementById("pin_number").value = num;
}

let generate = document.getElementById("generate_pin");
generate.addEventListener("click",function(){
    let num = pinNumber();
    inputPin(num);
    document.getElementById("checkField").innerText = 3;
    document.getElementById("invalid").innerText = "";
});

function outValue(){
    let outVal = document.getElementById("typeValue").value;
    return outVal;
}

function printOutput(num){
	document.getElementById("typeValue").value = num;
}

let number = document.getElementsByClassName("number");
for(let i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		let output = document.getElementById("typeValue").value;
		let result = output+this.id;
		printOutput(result);
	});
}


let operator = document.getElementsByClassName("operand");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
            printOutput("");
		}
		else if(this.id=="backspace"){
			let output= outValue().toString();
            if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
    });
}




let submit = document.getElementById("submit");
submit.addEventListener('click',function(){
    let checkAuth = document.getElementById("checkField").innerText;
    if(checkAuth > 0){
        let autoGen = document.getElementById("pin_number").value;
        let inputVal = document.getElementById("typeValue").value;
        if(autoGen == inputVal){
            document.getElementById("unsuccess").style.display = "none";
            document.getElementById("success").style.display = "block";
            inputPin("");
            printOutput("");
            document.getElementById("checkField").innerText = 3;
            document.getElementById("invalid").innerText = "";
        }
        else{
            document.getElementById("success").style.display = "none";
            document.getElementById("unsuccess").style.display = "block";
            document.getElementById("checkField").innerText = checkAuth-1;
        }
    }
    else{
        document.getElementById("invalid").innerText = "Try To Generate Code Again";
    }
});