// Task 1: Print "HELLO WORLD" to the console
console.log("HELLO WORLD");

// Task 2: Create a server that responds with '<h1>Hello Node!!!!</h1>\n' on port 3000
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello Node!!!!</h1>\n');
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// Task 3: Create and read a file named "welcome.txt"
const fs = require('fs');
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created: welcome.txt');
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);
    });
});

// Task 4: Generate a random password
const generatePassword = require('generate-password');
const password = generatePassword.generate({
    length: 10,
    numbers: true
});
console.log('Generated Password:', password);

// Task 5: Send an email using nodemailer
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});
const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',
    subject: 'Test Email',
    text: 'Hello from Node.js!'
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});


