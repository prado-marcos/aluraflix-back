const port = process.env.PORT || 3000;
const app = require("./src/app.js");

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
