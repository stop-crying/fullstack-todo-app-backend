const { Router } = require("express");
const { getTodo, saveTodo, deletTodo, updateTodo } = require("../controllers/TodoController");

const router = Router();

router.get("/", getTodo);
router.post("/save", saveTodo);
router.post("/update", updateTodo);
router.post("/delete", deletTodo);

module.exports = router;
