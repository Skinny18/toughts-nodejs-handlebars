const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('toughts', 'root', '12345678', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectado ao MySQL!')
}catch(error){
    console.log(error)
}

module.exports = sequelize;