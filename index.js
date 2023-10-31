(function checkPasswords(){
    const password = document.querySelector('.pass');
    const confirmPass = document.querySelector('.cpass');
    const delay = 100;

    password.addEventListener('keydown', () => {
        setTimeout(function() {
           checkEvent(password,confirmPass); 
        },delay);    
    })

    confirmPass.addEventListener('keydown',() => {
        setTimeout(function() {
            checkEvent(password,confirmPass);
        },delay)  
    })

})();

function checkEvent(password,confirmPass){
    
    if(password.value == confirmPass.value){
        const line = document.querySelector('.errortext');
        line.textContent = '';
        password.classList.remove('error');
        confirmPass.classList.remove('error');
        
    }else{
        const line = document.querySelector('.errortext');
        line.textContent = '*Passwords Don\'t Match';
        password.classList = 'pass error';
        confirmPass.classList = 'cpass error';
    }
}