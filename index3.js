const c = require("./db/connection");
//call open()
c.conn(); 
//call create()
c.create('HADITH','hadith_text TEXT');

c.insert('HADITH',['la ilaha illa allah', 'muhammadarrasullullah']);
//call close()
c.close();
