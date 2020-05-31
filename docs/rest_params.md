# example imlementation rest params
[rest_params](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

    function sum(table_name,...theArgs) {
      console.log("CREATE TABLE IF NOT EXISTS "+table_name+"("+theArgs+")");
    }

    sum("HADITH",('id INTEGER NOT NULL AUTOINCREMENT'),('hadith_text TEXT'));