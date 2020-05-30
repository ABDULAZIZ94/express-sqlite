# express-sqlite
    express framework implementation with sqlite 3 database

# development milestone
1. basic template flow on website
2. crud using sqlite

# installexpress
    npm install express --save

# install sqlite3
    npm install sqlite3 --save

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
