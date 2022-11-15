const express = require ('express')
const hbs = require('hbs')
const app = express()
const port = 4000

app.use(express.static('public'))

app.get('/',(req, res) => {
    res.render('home',{
        nombre: 'Home'
    })
});

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');

app.get('/contacto', (req,res) =>{
    //res.send('contacto')
    res.render('contact' ,{
        nombre:'Contacto'
    })
})

app.get('/login', (req,res) =>{
    //res.send('contacto')
    res.render('login' ,{
        nombre:'Login'
    })
})

app.get('/about', (req,res) =>{
    //res.send('contacto')
    res.render('about' ,{
        nombre:'About'
    })
})
app.get('/head', (req,res) =>{
    //res.send('contacto')
    res.render('head' ,{
        nombre:'Head'
    })
})
app.get('/cart', (req,res) =>{
    //res.send('contacto')
    res.render('cart' ,{
        nombre:'Cart'
    })
})
app.get('/checkout', (req,res) =>{
    //res.send('contacto')
    res.render('checkout' ,{
        nombre:'Checkout'
    })
})
app.get('/shop', (req,res) =>{
    //res.send('contacto')
    res.render('shop' ,{
        nombre:'Shop'
    })
})
app.get('/form', (req,res) =>{
    //res.send('contacto')
    res.render('form' ,{
        nombre:'Form'
    })
})
app.get('*',(req,res) =>{
    //res.send('página no encontrada')
    //res.sendFile(__dirname + '/public/views/404.html')
    res.render('404' ,{
        nombre:'pagina no encontrada'
    })
})

app.listen(port,() =>{
    console.log(`escuchando por el puerto http://localhost:${port}`)
})

