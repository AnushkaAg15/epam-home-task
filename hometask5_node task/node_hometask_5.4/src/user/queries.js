const getUsers = "SELECT * FROM users WHERE login LIKE '%su%' LIMIT 1;";
const getUsersByID = "SELECT * from users WHERE id = $1 and isdeleted = false";
const postUser = "";
const updateUsersByID = "";
const deleteUsersByID = "UPDATE users SET isdeleted = true WHERE id = $1";


module.exports = {
    getUsers,
    getUsersByID,
    postUser,
    updateUsersByID,
    deleteUsersByID
}