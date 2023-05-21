const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
  } = require('../../controllers/UserController');
  router
//   // `GET` all users
//   `POST` a new user:
    .route('/')
    .get(getAllUsers)
    .post(createUser);
  router
// * `PUT` to update a user by its `_id`
// * `DELETE` to remove user by its `_id`
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    // **BONUS**: Remove a user's associated thoughts when deleted.
    .delete(deleteUser);
  router
// **`/api/users/:userId/friends/:friendId`**
// * `POST` to add a new friend to a user's friend list
// * `DELETE` to remove a friend from a user's friend list 
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);
  
    
  module.exports = router;