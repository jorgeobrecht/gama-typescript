interface Usuario{
    nome:string;
    email:string;
    address?:string;
}

function getUser(): Usuario{
    return{
        nome:"Jorge",
        email:"jorge@email.com"
    }
}

function setUser(usuario:Usuario){
    //....
}