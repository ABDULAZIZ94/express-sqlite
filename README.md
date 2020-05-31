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
    
# test multiple insert row sql
    INSERT INTO langs(name) VALUES ('c++'),('python'),('java'),('c#'),('go');

# sqlite3 run()
    // Directly in the function arguments.
    db.run("UPDATE tbl SET name = ? WHERE id = ?", "bar", 2);
    // As an array.
    db.run("UPDATE tbl SET name = ? WHERE id = ?", [ "bar", 2 ]);
    // As an object with named parameters.
    db.run("UPDATE tbl SET name = $name WHERE id = $id", {
        $id: 2,
        $name: "bar"
    });

# exports
    module.exports = db; //just export
    module.exports.con = db; //with module variable
    exports = db; //shortcut of module.exports = db

# comunications
Client <=> server comunications. [Read_here](docs/comunications.md)

    