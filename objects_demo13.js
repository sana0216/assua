var user = {name: "sana" };

var loggedUser = {name: "Anjum" };
var permissions1 = {canView: true };
var permissions2 = { canEdit: true} ;

//copies all properties from permissions1 and permissions2 into user
Object.assign(user, loggedUser,  permissions1, permissions2);

//now user = {name: "Anjum", canView : true, canEdit: true}

console.log(user);