const router = require('express').Router();
// // example data
// {
//     "thoughtText": "Here's a cool thought...",
//     "username": "lernantino",
//     "userId": "5edff358a0fcb779aa7b118b"
//   }
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/ThoughtsController');

router
// * `GET` to get all thoughts
// * `GET` to get a single thought by its `_id`
// * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

router
// * `PUT` to update a thought by its `_id`
// * `DELETE` to remove a thought by its `_id`
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
// **`/api/thoughts/:thoughtId/reactions`**
// * `POST` to create a reaction stored in a single thought's `reactions` array field
  .route('/:thoughtId/reactions')
  .post(createReaction);

router
// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

  
module.exports = router;