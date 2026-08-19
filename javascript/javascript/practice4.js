class Login {

    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    login(user, pass) {

        if (user === this.username && pass === this.#password) {
            setTimeout(function (){
                console.log("Login Successful!");
            }, 2000);
        } else {
                console.log("Invalid Username or Password!");  
        }
    }

    display() {
        console.log("UserName: " + this.username);
        console.log("Password: " + this.#password);
    }
}

let account = new Login("admin", "1234");

account.login("admin", "1234");
account.display()