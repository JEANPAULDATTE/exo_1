const nodemailer = require('nodemailer');
const exp = 'devjeanpauldatte@gmail.com'
module.exports ={
    sendEmail: function (destinataire,objet,message){
        //declaration de la configuration
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 25,
            auth: {
                user: 'develidje@gmail.com',
                pass: 'd3v.3lidj3'
            }
        });

        // declarartion de l'objet du message
        let bodyMessage = {
            from: exp,
            to:destinataire,
            subject: objet,
            html: message
        }
        transporter.sendMail(bodyMessage, function(err,info){
            return "Message envoyé"
        })
    }
}