const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna uma mensagem de boas-vindas
 *     responses:
 *       200:
 *         description: Mensagem de boas-vindas da API
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Bem-vindo ao Marketplace API 🚀"
 */
router.get("/", (req, res) => {
  res.json({ message: "Bem-vindo ao Marketplace Exclusive Drive API 🚀" });
});

module.exports = router;
