

export const pages = {
    signin: {
        path: '#signin',
        template:
        `<div class="acount" >
            <div class="acount-header">
                <img src="../img/mobileLogo.jpg" class="acount-logo"alt="LoveBook logo">
            </div>
            <div class="log-content">
                <div class="login-user">
                    <form action="" id="login-form" class="form">
                        <label for="login-email">email</label>
                        <input type="email" id="login-email" required>
                        <label for="login-password">password</label>                           
                        <input type="password" id="login-password" required>
                        <button type="submit" class="btn login-btn">Login</button>
                    </form>
                </div>
                <div class="login-google">
                    <p>Login with google</p>
                </div>
                <div>
                <button id="signup"><a href="#/signup">create an account</a></button>
                </div>
            </div>
        </div>
         `
    },

    signup: {
        path: "#signup",
        template:
        `<div class="acount" >
            <div class="acount-header">
                <img src="../img/mobileLogo.jpg" class="acount-logo"alt="LoveBook logo">
            </div>
            <div class="signup">
                <form action="" id="signupForm" class="form">
                    <label for="signupEmail">email</label>
                    <input type="email" class="signup-email" id="signupEmail" required>
                    <label for="signupPassword">password</label>
                    <input type="password" class="signup-password" id="signupPassword" required>
                    <label for="signupPassword2">confirm your password</label>
                    <input type="password" class="login-password" id="signupPassword2" required>
                    <p id="signupMesseges"></p>
                    <button type="submit" class="btn login-btn">Signup</button>
                </form>
            </div>
        </div>
        `
    },

    home: {
        path: "/",
        template:
        `<nav class="navbar" id="navbar">
            <div class="navbar-container">
                <a class="navbar-logo" href="#">Logo</a>
                <div class="navbar-options">
                    <ul class="navbar-items-list">
                    <li class="navbar-item">
                        <a class="navbar-link" href="#">Profile</a>
                    </li>
                    <li class="navbar-item">
                        <a class="navbar-link" id="logout">LogOut</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        `
    }

}