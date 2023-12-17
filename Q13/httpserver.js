const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const db = require('./database');

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    if (req.url === '/') {
        fs.readFile("./signup.html").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
            return;
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        })
        if (req.method === 'POST' && pathname === '/') {
            let body = '';

            req.on('data', (chunk) => {
                body += chunk;
            });

            req.on('end', () => {
                const formData = new URLSearchParams(body);
                const email = formData.get('email');
                const name = formData.get('name');
                const password = formData.get('password');

                const sql = 'INSERT INTO users (email, name, password) VALUES (?,?, ?)';
                db.query(sql, [email, name, password], (err, result) => {
                    if (err) {
                        console.log('Error inserting data:', err);
                        res.writeHead(500);
                        res.end('Error inserting data');
                    } else {
                        console.log('Data inserted successfully');
                        res.writeHead(302, { 'Location': '/home' });
                        res.end();
                    }
                });
            });
        }
    }
    else if (req.url === '/home') {
        fs.readFile("./index.html").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
            return;
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        })
    }
    else if (req.url === '/login') {
        fs.readFile("./login.html").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
            return;
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
        if (req.method === 'POST' && pathname === '/login') {
            let body = '';

            req.on('data', (chunk) => {
                body += chunk;
            });

            req.on('end', () => {
                const formData = new URLSearchParams(body);
                const email = formData.get('email');
                const password = formData.get('password');
                const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
                db.query(sql, [email, password], (err, result) => {
                    if (err) {
                        console.log('Error during login:', err);
                        res.writeHead(500);
                        res.end('An error occurred during login');
                    } else {
                        if (result.length > 0) {
                            console.log('Logged in successfully');
                            res.writeHead(302, { 'Location': '/home' });
                            res.end();
                        } else {
                            console.log('Invalid user');
                            res.writeHead(302, { 'Location': '/login' });
                            res.end();
                        }
                    }
                });
            }
            );
        }
    }
    else if (req.url === '/cardjson') {
        fs.readFile("./cards.json").then(contents => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(contents);
            return;
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        }
        );
    } 
    else if (req.url === '/card') {
        fs.readFile("./card.js").then(contents => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(contents);
            return;
        }).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        }
        );
    }
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const port = 10000;
server.listen(port, () => {
    console.log(`Node.js server is running on port ${port}`);
});
