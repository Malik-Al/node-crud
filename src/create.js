const {client} = require('./db')

exports.create = async(phone_number, hash_number) => {
    try{
        const res = await client.query(`insert into product (phone_number, hash_number) values ($1, $2);
        `,[phone_number, hash_number])
        res.rows
    }catch(error){
        console.log(error);
    }
}