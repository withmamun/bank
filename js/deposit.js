// Deposit Amount to Bank -----------------------------

document.getElementById('deposit__btn').addEventListener('click', function () {
    const depositFeild = document.getElementById('deposit__input');
    const depositAmountString = depositFeild.value;
    const depositAmount = parseFloat(depositAmountString);


    const depositElement = document.getElementById('deposit__amount');
    const depositInputString = depositElement.innerText;
    const depositInput = parseFloat(depositInputString);


    const currentDeposit = depositAmount + depositInput;

    depositElement.innerText = currentDeposit;


    // Balance Total =================
    const balanceTotalElement = document.getElementById('balance__amount');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceConvert = parseFloat(balanceTotalString);

    const currentBalance = balanceConvert + depositInput;

    balanceTotalElement.innerText = currentBalance;



    depositFeild.value = '';
})