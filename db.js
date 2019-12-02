const mysql = require("mysql");

function connect()
{
    const connection = mysql.createConnection(
        {  //please do not use local host here because here connection is to be established on container and not the localhost 
            host: '172.17.0.1',
            user:'root',
            password:'manager',
            database:'myapp_db',
            port:9099
        }
    )
    connection.connect()
    return connection

}

module.exports = {
    connect: connect
}
