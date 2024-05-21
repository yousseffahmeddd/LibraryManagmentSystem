function sign(event) {

    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;
    var repeatPassword = document.getElementById('psw-repeat').value;
    var kind_user = document.querySelector('input[name="kind_user"]:checked').value;

    if (find_user(username)){
        document.getElementById("txt_user").innerHTML = "This username is currently in use";
        return;
    }
    if (find_email(email)){
        document.getElementById("txt_email").innerHTML = "This email is currently in use";
        return;
    }
    if (password !== repeatPassword) {
        document.getElementById("txt_pas").innerHTML = "Passwords do not match!";
        return;
    }else if (password.length < 5 || password.length >= 16){
        if (password.length < 5){
            document.getElementById("txt_pas").innerHTML = "Sorry, Passwords is shoud contain at least 5 characters";
        }else{
            document.getElementById("txt_pas").innerHTML = "Sorry, Passwords is shoud contain at most 16 characters";
        }
        return;
    }

    var new_user = {
        username: username,
        email: email,
        password: password,
        kind_user: kind_user
    };

    // Store user object in local storage
    var users =JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];

    // Add the new user to the array
    users.push(new_user);

    // Store the updated users array in local storage
    localStorage.setItem('users', JSON.stringify(users));
    if (new_user.kind_user === "admin"){
        window.open("admin.html" , "_self");
    }else{
        window.open("user.html" , "_self");
    }
}
function find_user(username){
    list_user=new Array();
    list_user =JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];
    for(let i = 0 ; i < list_user.length ; i++){
        if (list_user[i].username == username){
            return true;
        }
    }
    return false;
}
function find_email(email){
    list_user=new Array();
    list_user =JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];
    for(let i = 0 ; i < list_user.length ; i++){
        if (list_user[i].email == email){
            return true;
        }
    }
    return false;
}
