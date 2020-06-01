const c = require("./db/connection");
//call open()
c.conn(); 
//call create()
// c.create('HADITH','hadith_text TEXT');
//call insert()
// c.insert('HADITH' ,['hadith_text'] ,['la ilaha illa allah', 'muhammadarrasullullah']);
//call query()
c.query(console.log);
//call close()
c.close();
