var initialPrice = document.querySelector("#initial-price");
var numberOfStocks = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var btnSubmit = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output");

btnSubmit.addEventListener('click', submitHandler);

function submitHandler(){
    var initial = initialPrice.value;
    var quantity = numberOfStocks.value;
    var current = currentPrice.value;
    
    if(initial==='' || quantity==='' || current===''){
        showOutput(`Please fill out all the fields`);
    }
    else if(Number(initial)<0 || Number(quantity)<0 ||Number(current)<0){
        showOutput(`Please Enter positive values`)
    }else{
        initial = Number(initialPrice.value);
        quantity = Number(numberOfStocks.value);
        current = Number(currentPrice.value);
        calculateProfitAndLoss(initial, quantity, current);   
    }
}
function calculateProfitAndLoss(initial, quantity, current){
    if(initial>current){
        var loss = ((initial - current) * quantity).toFixed(2);
        var lossPercent = ((loss/(initial*quantity)) * 100).toFixed(2);
        showOutput(`Hey, the loss is ${loss} and the loss percentage is ${lossPercent}%`);
        outputBox.style.color='red';
       // outputBox.innerText = `Hey, the loss is ${loss} and the loss percentage is ${lossPercent}%`;
    }else if(current>initial){
        var profit = ((current - initial) * quantity).toFixed(2);
        var profitPercent = ((profit/(initial*quantity)) * 100).toFixed(2);
        showOutput(`Hey, the profit is ${profit} and the profit percentage is ${profitPercent}%`);
        outputBox.style.color='green';
        //outputBox.innerText = `Hey, the profit is ${profit} and the profit percentage is ${profitPercent}%`;
    }else{
        showOutput(`No gain no pain and no pain no gain`);
        outputBox.style.color='blue';
        //outputBox.innerText = `Hey, there is no gain no pain and no pain no gain`;
    }
}

function showOutput(msg){
    outputBox.innerText = msg;
}