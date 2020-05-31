# express-sqlite
    express framework implementation with sqlite 3 database
    https://github.com/mapbox/node-sqlite3/wiki

# development milestone
1. basic routing on website
2. crud using sqlite
3. sessions and cookies

# install dependencies
installexpress
    npm install express --save

install sqlite3
    npm install sqlite3 --save

install pug
    npm install pug --save

install multer
     npm install multer --save

install express session
    npm install express-session --save
 
install cookie-parser
    npm install cookie-parser --save

install popperjs
     npm i @popperjs/core --save
# test multiple insert row sql
    INSERT INTO langs(name) VALUES ('c++'),('python'),('java'),('c#'),('go');

# sqlite 3
[read here](docs/sqlite.md)

# exports
    module.exports = db; //just export
    module.exports.con = db; //with module variable
    exports = db; //shortcut of module.exports = db

# comunications
Client <=> server comunications. [Read here](docs/comunications.md)

# cookies and session
[read here](docs/cookies%20and%20session.md)

# rest params
[read here](docs/rest_params.md)

# fetching data from server
[read here](docs/fetching.md)