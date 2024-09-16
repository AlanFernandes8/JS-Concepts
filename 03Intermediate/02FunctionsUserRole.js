function getUserRole(name, role){
    switch (role) {
        case "admin":
        return `${name} is the Admin`;
    case "subadmin":
        return `${name} is a sub-admin with access to create and delete courses`;
    case "testprep":
        return `${name} is a testprep with access to create and delete tests`;
    case "user":
        return `${name} is a user which consumes the content`;
    default:
        return `${name} is a trial user`;
    }
}

console.log(getUserRole("Alan", "admin"));

var getRole = getUserRole("Ace", "user");
console.log(getRole);