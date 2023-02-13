// Login Bank Account ----------------------------------
document.getElementById('submit__btn').addEventListener('click', function () {
    const emailFeild = document.getElementById('user__email');
    const email = emailFeild.value;

    const passFeild = document.getElementById('user__password');
    const password = passFeild.value;

    if (email === 'hanzo@gmail.com' && password === 'money1234') {
        window.location.href = "account.html"
    } else {
        alert("wrong information");
    }
});