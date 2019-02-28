const User = require('../models/user');
const authCtrl = {};
const nodemailer = require('nodemailer');
 

authCtrl.login = async (req, res) => {
        
    let user = await User.findOne({email: req.body.email});


    if(user){
        
        if(user.password == req.body.password){
            res.json(user);
        } else {
            res.json(401, {
                'status': 'Login failed, User or Password Wrong'
            });
        }

    }
    
    else { 
        res.json(401, {
            'status': 'Login failed, User not registered'
        });
    }


    
};

authCtrl.register = async (req, res) => {
    let user = await User.find({email: req.body.email});
    
    if(user.length == 0){
        //let rolList = await Roles.find({name: 'usuario'});
        user = new User({
            roles: req.body.roles,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        });
        user.save().then(() => {
            res.json(user)
        });
    } else {
        res.json(302, {
            'status': 'User already exists'
        });
    }
        
};

authCtrl.restorePassword = async (req, res) => { 
    let codigoRestauracion = Math.random().toString(36).replace('0.', '') ;

    let email = req.body.email;
    let body = "http://localhost:4200/restore/"+codigoRestauracion;
    let asunto = 'Cambio de contraseña';
      
    let user = await User.findOne({email: req.body.email});
    if(user){        
        user.restaurar = true;
        user.codigo = codigoRestauracion;
        user.save(() => {
            let mailOptions = {
                to: email, 
                subject: asunto,
                text: body
              };
            
              if (email === '') {                
                res.send(400, {
                message: 'Bad request'
                });
                return;
              }
              
              transporter.sendMail(mailOptions, function (error, response) {
                if (error) {
                  console.log(error);
                  res.end('error');
                } else {
                  console.log('Message sent: ', response);
                  res.end('sent');
                }
              });
        });
    } else {
        res.json(401, {
            'status': 'User not registered'
        });
    }    
  };

const transporter = nodemailer.createTransport({

    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
        chipers: "SSLv3"
    },
    auth: {
        user: 'proyectosmidi@espol.edu.ec', // Enter here email address from which you want to send emails
        pass: 'Amomidi2001' // Enter here password for email account from which you want to send emails
    },
    tls: {
    rejectUnauthorized: false
    }
});


authCtrl.changePass = async (req, res) => {
    let user = await User.findOne({codigo: req.body.codigo});
   
             
    if(user){

        if(user.restaurar == true){
        user.password = req.body.password;
        user.restaurar = false;
        user.codigo = '';
        user.save().then(() => {
            res.json(user)
        });
    }

    } else {
        res.json(302, {
            'status': 'No esta registrado'
        });
    }

};

  

module.exports = authCtrl;
