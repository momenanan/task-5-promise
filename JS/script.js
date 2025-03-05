function authenticateUser(username, password){
    return new Promise((resolve,reject)=>{
        const validUsername="momen";
        const validPassword="12345";
        setTimeout(() => {
            if(username===validUsername && password===validPassword){
                resolve("Login successful.");
            }
            else{
                reject("invalid username or password.")
            }
            
        }, 1000);
    });
}
function handleLogin(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");
    authenticateUser(username,password)
    .then(successMessage =>{
        messageElement.style.color="green";
        messageElement.textContent=successMessage;
        console.log(successMessage);
    })
    .catch(errorMessage=>{
        messageElement.style.color="red";
        messageElement.textContent=errorMessage;
        console.log(errorMessage);
    });
}