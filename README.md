docker network create minha-rede

Na pasta mysql:

    docker build -t mysqlapi .
    
    docker run -it -p 3306:3306 --name mysqlapicontainer --rm --network minha-rede -e MYSQL_DATABASE=toughts -e MYSQL_ROOT_PASSWORD=12345678 mysqlapi 

Na pasta raiz:

    docker build -t nodeapi . 

    docker run --name node-container --network minha-rede -p 3000:3000 -d nodeapi

    

