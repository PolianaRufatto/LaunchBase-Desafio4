const fs = require('fs');
const data = require('./data.json');

// create
exports.post = function(req, res) {
    const keys = Object.keys(req.body);

    for(key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!');
        }
    }

    let {avatar_url, nome, nascimento, escolaridade, aula, atuacao} = req.body;


    nascimento = Date.parse(nascimento);
    const created_at = Date.now();
    const id = Number(data.teachers.length + 1);


    data.teachers.push({
        id,
        avatar_url,
        nome,
        nascimento,
        escolaridade,
        aula,
        atuacao,
        created_at
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error");
        return res.redirect("/teachers");
    });

    // return res.send(req.body);
}