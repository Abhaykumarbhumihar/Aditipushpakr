const express = require('express');
const app = express();
const bodyparser = require('body-parser');
var urlencoded = bodyparser.urlencoded();
app.set('view engine', 'ejs')
var port = process.env.PORT || 3002;
var path = require('path');



app.set('view engine','ejs')








     


 app.use('/images', express.static(path.join(__dirname, 'view/images')))
//app.use('/', express.static(path.join(__dirname, 'view')))

app.get("/", urlencoded, function (req, res) {

    // inserData(req.query.name, req.query.email, req.query.address)
     res.render('newnav')
 });


 




app.listen(port)
