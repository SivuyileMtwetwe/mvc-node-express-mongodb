const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBook);
router.delete("/", bookController.deleteAllBooks);
router.delete("/:id", bookController.deleteBook);
router.patch("/:id", bookController.updateBook);
module.exports = router;
