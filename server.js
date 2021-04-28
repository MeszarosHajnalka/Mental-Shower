const express = require('express');
const app = express();
app.use(express.static('./www'));
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
});
app.listen(process.env.PORT || 8080);