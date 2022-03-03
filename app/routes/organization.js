const { check } = require('express-validator')
const router = require('express')();
const { listComment, deleteComment, createComment } = require('../controllers/comment_controller');
const { listMembers } = require('../controllers/organization_controller');

const commentValidation = [
  check('comment').isLength({ min: 3, max: 300}).withMessage('Comment must be between 3 and 300 characters'),
  check('user').isNumeric().withMessage('User must be a userId'),
]

router.post("/:orgname/comments", commentValidation, createComment);
router.get("/:orgname/comments", listComment);
router.delete("/:orgname/comments", deleteComment);
router.get("/:orgname/members", listMembers)


module.exports = router