const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const Repository = require('./repository');

const scrypt = util.promisify(crypto.scrypt);


class userRepository extends Repository{

    async comparePassword(saved, supplied){
        const [ savedPassword, salt ] = saved.split('.');
        const hashedSupplied = await scrypt(supplied, salt, 64);
        return  savedPassword === hashedSupplied.toString('hex');    
    }
    
  async createUser(attr){
    attr.id = this.randomId();
    const salt = crypto.randomBytes(8).toString('hex');
    const buf = await scrypt(attr.password, salt, 64);
   
     const records = await this.getAll();
     records.push({
         ...attr,
         password: `${buf.toString('hex')}.${salt}`
     });
    
     await this.writeAll(records);
     return attr;
  }

    }



module.exports = new userRepository('users.json');

