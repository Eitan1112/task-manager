const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'Eitan1112@gmail.com',
        subject: 'Task App - Thanks for joining in!',
        text: `Welcome to the app, ${name}, let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'Eitan1112@gmail.com',
        subject: 'Task App - Canceling your account',
        text: `Hey ${name}, you cancelled your user succesfuly. We would like to know how can we do better next time.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}