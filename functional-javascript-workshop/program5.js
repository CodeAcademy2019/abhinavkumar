function checkUsersValid(goodUsers){
    return function allUsersValid(submittedUsers){
        return submittedUsers.every(function(submittedUser){
            return goodUsers.some(function(goodUser){
                return submittedUser.id === goodUser.id;
            });
        });
    }
}

//EVERY submitted user must be SOME valid user

module.exports = checkUsersValid;