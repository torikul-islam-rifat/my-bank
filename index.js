// first page out program
    const enterBtn = document.getElementById("enterBtn");
    enterBtn.addEventListener("click", function () {
    const main = document.getElementById("main").style.display = "none";
    const secondery = document.getElementById("second-look").style.display = "block";
})
// addDepositProgram
    const depositBtn = document.getElementById("depositBtn");
    depositBtn.addEventListener("click", function () {
    const depositAmountNumber=getInputNumber("depositAmount");
    
    upDateSpanText("currentDepositAmount",depositAmountNumber);
    upDateSpanText("currentBalanceAmount", depositAmountNumber);
})
    function upDateSpanText(id, depositAmountNumber) {

    const currentAmount = document.getElementById(id).innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    const totalAmount = currentAmountNumber + depositAmountNumber;
    document.getElementById(id).innerText = totalAmount;
}
// addWithdrawProgram
    const withdrawBtn = document.getElementById("withdrawBtn");
    withdrawBtn.addEventListener("click", function () {
    const  withdrawAmountNumber=getInputNumber("withdrawAmount");


    const currentWithdrawAmount = document.getElementById("currentWithdrawAmount").innerText;
    const currentWithdrawAmountNumber = parseFloat(currentWithdrawAmount);
    const totalWithdrawAmount = currentWithdrawAmountNumber + withdrawAmountNumber;
    document.getElementById("currentWithdrawAmount").innerText = totalWithdrawAmount;

    const currentBalanceAmount = document.getElementById("currentBalanceAmount").innerText;
    const currentBalanceAmountNumber = parseFloat(currentBalanceAmount);
    const totalBalanceAmount = currentBalanceAmountNumber + withdrawAmountNumber * -1;
    document.getElementById("currentBalanceAmount").innerText = totalBalanceAmount;
})
    function getInputNumber(id){
        const Amount = document.getElementById(id).value;
        const AmountNumber = parseFloat(Amount);
        return AmountNumber;
    }