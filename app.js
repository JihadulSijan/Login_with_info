const fixedUsername = "abcd";
const fixedPass = "1234";
const button = document.querySelector('.button');
button.addEventListener('click',function(){
    const username = document.querySelector('.username').value;
    const pass = document.querySelector('.password').value;
    if((username==fixedUsername) && (pass==fixedPass )){
        document.querySelector('.login_box').style.display = 'none';
        document.querySelector('.transaction-box').style.display = 'block';

    }
    else if((username=="")||(pass=="")) {
        document.querySelector('.login_box').style.display = 'block';
        document.querySelector('.error_box').style.display = 'none';
        document.querySelector('.transaction-box').style.display = 'none';
 
    }
    else if((username != fixedUsername)||(pass != fixedPass)){
        document.querySelector('.login_box').style.display = 'none';
        document.querySelector('.error_box').style.display = 'block';

    }
})
const deposite_button = document.querySelector('.deposite_button');
deposite_button.addEventListener('click',function(){
    const getDeposite = parseFloat(document.querySelector('.deposite').value);
    const deposite_amount = parseFloat(document.querySelector('.deposite_amount').innerHTML);
    const newDeposite = getDeposite + deposite_amount;
    document.querySelector('.deposite_amount').innerHTML = newDeposite;
    const balance_amount = parseFloat(document.querySelector('.balance_amount').innerHTML);
    const newBalance = getDeposite + balance_amount;
    document.querySelector('.balance_amount').innerHTML = newBalance;
    document.querySelector('.deposite').value="";
})
const withdraw_button = document.querySelector('.withdraw_button');
withdraw_button.addEventListener('click',function(){
    const getWithdraw = parseFloat(document.querySelector('.withdraw').value);
    const balance_amount = parseFloat(document.querySelector('.balance_amount').innerHTML);
    const withdraw_amount = parseFloat(document.querySelector('.withdraw_amount').innerHTML);
    const newBalance = balance_amount - getWithdraw;
    document.querySelector('.balance_amount').innerHTML = newBalance;
    const withDrawal = getWithdraw+withdraw_amount;
    document.querySelector('.withdraw_amount').innerHTML = withDrawal;
    document.querySelector('.withdraw').value = "";
})