const express = require('express');
const Certificate = require('/models/Certificate');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, course } = req.body;

  try {
    const id = await Certificate.create(name, course);
    res.send({ id });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
