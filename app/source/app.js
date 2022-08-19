const imports = require('./configs/imports');

const app = imports.express();

app.use(imports.express.json());
app.use(imports.express.urlencoded({ extended:true }));

app.use(imports.express.static(__dirname+'/../public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use('/', imports.router)

app.use('/', imports.error.handler['not-found'])

module.exports = {
    app
}  