module.exports = function createDreamTeam( members ) {
    reversMembers = [];
    if (typeof(members) === "number" || members === null || members === undefined) {
        return false;
    }
    for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) === "string")
            reversMembers.push(members[i].trim()[0].toUpperCase());
    }
    reversMembers.sort();
    str = "";
    for (let i = 0; i < reversMembers.length; i++) {
        str += reversMembers[i];
    }
return str;
};


