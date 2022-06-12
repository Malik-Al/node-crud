const {client} = require('./db')

exports.list = async() => {
    try{
        const res = await client.query('select * from product')
        res.rows
    }catch(error){
        console.log(error);
    }
}