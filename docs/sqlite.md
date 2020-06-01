# documentation
[sqlite3](https://github.com/mapbox/node-sqlite3)
[sqlite 3 api](https://github.com/mapbox/node-sqlite3/wiki/API)

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

# sqlite3 commads
open database using cli
    sqlite3 <db_name>.db

select *
    SELECT * FROM TABLE

describe
    .describe

quit
    .quit