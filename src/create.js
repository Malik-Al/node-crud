const {client} = require('./db')

exports.list = async(form) => {
    try{
        const res = await client.query(`
        insert into product (phone_number, hash_number) values 
        ($1, $2);
        `,[form.phone_number, form.hash_number])
        res.rows
    }catch(error){
        console.log(error);
    }
}