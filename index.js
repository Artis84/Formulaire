/*jshint esversion: 6 */

const express = require("express"),
    favicon = require("serve-favicon"),
    path = require("node:path"),
    port = process.env.PORT || 1024,
    formController = require("./controllers/form_controller");

const app = express();

app.set("view engine", "pug");

app.use(favicon(path.join(__dirname, "favicon.ico")), express.static(__dirname), express.json(), express.urlencoded({ extended: false }));
app.use("/", express.static("public/assets"));

formController(app);

app.listen(port, () => {
    console.log(`Server started at http://127.0.0.1:${port}`);
});
