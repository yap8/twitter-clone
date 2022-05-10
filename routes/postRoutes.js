const router = require('express').Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, postController.getAll);
router.get('/:id', authMiddleware, postController.getOne);
router.post('/', authMiddleware, postController.addOne);

module.exports = router;
