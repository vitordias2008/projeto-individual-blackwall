var express = require("express");
var router = express.Router();
var partidaController = require("../controllers/partidaController");

router.post("/quiz", function (req, res) {
    partidaController.salvarQuiz(req, res);
});
router.post("/senha", function (req, res) {
    partidaController.salvarSenha(req, res);
});
router.get("/dashboard/:idUsuario", function (req, res) {
    partidaController.dashboard(req, res);
});

module.exports = router;
