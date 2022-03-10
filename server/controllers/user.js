const db = require("../database/db")

exports.login = (req, res) => {
    const { email, password } = req.body

    db.query(`SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`, (error, result) => {
        if(error) throw error;

        if(!result.length){
            return res.status(400).json({
                user: false
            })
        }

        return res.status(400).json({
            user: result[0]
        })
    })
}


exports.register = (req, res) => {
    const { name, email, password, phone } = req.body

    db.query(`SELECT * FROM user WHERE email = '${email}'`, (error, result) => {
        if(error) throw error;
        
        if(!!result.length){
            return res.status(300).json({
                message: "Bunday EMAIL bilan user mavjud!"
            })
        } else {
            db.query(`INSERT INTO user (name, email, password, phone) VALUES ('${name}', '${email}', '${password}', '${phone}')`, (error, result) => {
                if(error){  
                    return res.status(400).json({
                        message: "Bazaga kiritishda xatolik!",
                        error: true
                    })
                }

                return res.status(200).json({
                    message: "Bazaga kiritildi!",
                    error: false
                })
            })
        }

    })
}