var user = "admin";

switch(user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("Get access to create and delete courses");
        break;
    case "testprep":
        console.log("Get access to create and delete tests");
        break;
    case "user":
        console.log("Get access to consume the content");
        break;

    default:
        console.log("Trial user");
        break;
}