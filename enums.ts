// ek aise property jiski multiple values hoti hai
// eg user ne login kiya user1 => normal user
// eg user2 => admin user

enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name?:string;
    email:string;
    password:string;
    // enums ek he property ke 2 values
    role:Roles
}

const user1:LoginDetails = {
    name:"Anup",
    email:"anks@gmail.com",
    password:"abc",
    role:Roles.admin
}

const user2:LoginDetails = {
    name:"Kanu",
    email:"kanu@gmail.com",
    password:"xyz",
    role:Roles.user
}
// kaise pta krna hai konsa user admin hai konsa nhi
const isAdmin = (user1:LoginDetails): string =>  {

const {name , email, role} = user1;

return role === "admin" ? `${email} is allow to edit the website` : `${email} is not allow to edit the website`

}
console.log(isAdmin(user1));
console.log(isAdmin(user2));

