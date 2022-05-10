const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/', postController.getAll);
router.get('/:id', postController.getOne);
router.post('/', postController.addOne);

module.exports = router;
