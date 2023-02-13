// Withdraw Amount to Bank -----------------------------

document.getElementById('withdraw__btn').addEventListener('click', function () {
    const withdrawFeild = document.getElementById('withdraw__amount');
    const withdrawString = withdrawFeild.value;
    const withdrawAmount = parseFloat(withdrawString);

    const previousWithdraw = document.getElementById('withdraw__total');
    const previousWithdrawString = previousWithdraw.innerText;
    const totalWithdraw = parseFloat(previousWithdrawString);

    const currentWithdraw = withdrawAmount + totalWithdraw;
    previousWithdraw.innerText = currentWithdraw;

    const balanceTotalElement = document.getElementById('balance__amount');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceConvert = parseFloat(balanceTotalString);

    const newBalanceTotal = balanceConvert - withdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawFeild.value = '';

})