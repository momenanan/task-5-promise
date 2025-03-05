const authenticateUser = (username, password) => {
    return new Promise((resolve, reject) => {
        const validUsername = "momen";
        const validPassword = "12345";
        setTimeout(() => {
            if (username === validUsername && password === validPassword) {
                resolve("Login successful.");
            } else {
                reject("Invalid username or password.");
            }
        }, 1000);
    });
};

const handleLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    messageElement.classList.remove("success-message","error-message");

    authenticateUser(username, password)
        .then(successMessage => {
            messageElement.classList.add("success-message")
            messageElement.textContent = successMessage;
            console.log(successMessage);
        })
        .catch(errorMessage => {
            messageElement.classList.add("error-message")
            messageElement.textContent = errorMessage;
            console.log(errorMessage);
        });
};
