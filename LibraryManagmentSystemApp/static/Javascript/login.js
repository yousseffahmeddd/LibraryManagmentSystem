
function login(event) {

    event.preventDefault();

    var email = document.getElementById('mail').value;
    var password = document.getElementById('pass').value;

    if (find_email(email)){
        let persorn = Getuser(email);
        if (persorn.password === password){
            if (persorn.kind_user === "admin"){
                window.open("admin.html" , "_self");
            }else{
                window.open("user.html" , "_self");
            }
        }else{
            document.getElementById("txtlogin_pas").innerHTML = "Sorry, Passwords is not correct , try again";
            return;
        }
    }else{
        document.getElementById("txtlogin_email").innerHTML = "Sorry, Email is not correct , try again or signup"; 
        return
    }
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
function Getuser(email){
    list_user=new Array();
    list_user =JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];
    for(let i = 0 ; i < list_user.length ; i++){
        if (list_user[i].email == email){
            return (list_user[i]);
        }
    }
}