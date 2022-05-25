function sendEmail() {
  Email.send({
    SecureToken: '6a147480-9793-4ed2-8d02-afefc49ba0e4',
    To: 'zizoko1337@gmail.com',
    From: 'test@gmail.com',
    Subject: 'This is the subject',
    Body: 'And this is the body',
  }).then((message) => alert(message));
}
