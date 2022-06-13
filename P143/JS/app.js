function Sum(){
    var amount = document.getElementById('Amount').value; 
    var interest = document.getElementById('Interest').value;
    var month = document.getElementById('Month').value;

    document.getElementById("amount").innerHTML = amount + " AZN" ;
    document.getElementById("amount").style.color = 'red'

    document.getElementById("interest1").innerHTML = interest + " %";
    document.getElementById("interest1").style.color = 'red'
    document.getElementById("month").innerHTML = month + " Month";
    document.getElementById("month").style.color = 'red'

    var totalAmount = (amount * interest)/100 + Number(amount)
    document.getElementById('totalamount').innerHTML = totalAmount + " AZN";
    
    var monthlyPayment = ((amount*(interest/100)) + Number(amount))/month;
    document.getElementById('monthlypayment').innerHTML=monthlyPayment.toFixed(2) + " AZN";
    
    var totalInterest = (amount * interest)/100
    document.getElementById('interest2').innerHTML = totalInterest + " AZN";
    
    
}

function decrease(){
    var count = document.getElementById('count').innerHTML;
    count--;
    document.getElementById('count').innerHTML = count;
    if(count < 0){
        document.getElementById('count').style.color ='red'
        
    }
    
}
function increase(){
    var count = document.getElementById('count').innerHTML;
    count++;
    document.getElementById('count').innerHTML = count;
    if(count > 0){
        document.getElementById('count').style.color ='blue'
    }
}
function reset(){
    var count = document.getElementById('count').innerHTML;
    count = 0;
    document.getElementById('count').innerHTML = count;
    if(count === 0){
        document.getElementById('count').style.color = 'black'
    }
}

 
