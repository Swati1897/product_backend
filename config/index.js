const configValues = require('./config.json');

module.exports = { 
    getDbConnectionString : function() {
       return `mongodb+srv://${configValues.uname}:${configValues.pwd}@cluster1.7sa7c.mongodb.net/node`;
    } 
}
  