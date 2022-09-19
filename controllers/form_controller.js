/*jshint esversion: 8 */

module.exports = function (app) {
    const axios = require('axios');
    const FormData = require('form-data');
    const API_URL = 'https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec';
    // const key = 'CLE-TEST-IOT';
    app.get('/index', (req, res) => {
        res.render('index');
    });

    app.get('/form', (req, res) => {
        res.render('form_success');
    });

    app.get('/error', (req, res) => {
        res.render('error');
    });

    app.post('/form', async (req, res, next) => {
        const formData = new FormData(req.body);
        // formData.append('cle', `${key}`);
        try {
            const response = await axios.post(`${API_URL}`, formData);
            console.log(response);
            res.status(200).render('form_success');
            console.log(req.body);
        } catch (error) {
            return next(error);
        }
    });

    // app.get("/index/:request_number", (req, res) => {
    //     const data = { age: 23, job: "Livreur" };
    //     res.render("index", { title: req.params.request_number, desc: data });
    // });
};
