var user = {name: "sana" };

var permissions1 = {canView: true };
var permissions2 = { canEdit: true} ;

//copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

//now user = {name: "sana", canView : true, canEdit: true}

console.log(user);