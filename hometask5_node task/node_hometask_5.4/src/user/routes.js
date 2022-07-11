const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getusers);
router.get('/:id', controller.getusersbyid);
router.post('/', controller.postuser);
router.post('/:id', controller.updateuserbyid);
router.delete('/:id', controller.deleteuserbyid);

module.exports = router;