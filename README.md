1. Install typescript and ts-node globally npm install -g typescript ts-node  
2. Install npm install on root directory
3. Start mongo database server

# Apis with payload:
# Register User APi:
Api Url: http://localhost:3030/api/user
Api Type: POST
Api Payload: {
    "firstName": "test",
    "lastName": "hello",
    "email": "hello123@gmail.com",
    "password": "123456"
}

Api Response: 
{
    "info": "User Successfully Registered",
    "data": {
        "_id": "5f094e1c9e6e261a0ddab9cd",
        "firstName": "hammaad",
        "lastName": "hello",
        "email": "qwerty@gmail.com",
        "isActive": true
    }
}

# Login User Api
Api Url : http://localhost:3030/api/login
Api Type: POST
Api Payload: {
    "email": "hello@gmail.com",
    "password": "123456"
}

Api Response: {
    "STATUS": "SUCCESS",
    "MESSAGE": "User Login",
    "DATA": {
        "user": {
            "_id": "5f087356e418a67406eae8d3",
            "firstName": "hammaad",
            "lastName": "hello",
            "email": "hello@gmail.com"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMDg3MzU2ZTQxOGE2NzQwNmVhZThkMyIsImlhdCI6MTU5NDM5MzI3NywiZXhwIjoxNTk0NDc5Njc3fQ.BdIGSiyH5AKtoPAvM-7bvezLcUQ0wt_G_h5RcQjBrlw"
    }
}

# Get All Product Api
Api Url: http://localhost:3030/api/product
Api Type: GET
Api Response: {
    "STATUS": "SUCCESS",
    "MESSAGE": "All Product",
    "DATA": [
        {
            "_id": "5f08526c61c27b2d841777aa",
            "name": "Nikon D850",
            "description": "A digital camera",
            "price": 54000,
            "make": "2020"
        },
        {
            "_id": "5f08537d61c27b2d8417781f",
            "name": "Nikon D540",
            "description": "A digital camera",
            "price": 50000,
            "make": "2007"
        },
        {
            "_id": "5f08537d61c27b2d84177822",
            "name": "Canon D500",
            "description": "A digital camera",
            "price": 20000,
            "make": "2007"
        }
    ]
}

# Add To cart API
Api Url: http://localhost:3030/api/add/cart
Api Type: POST
Header: {x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMDg3MzU2ZTQxOGE2NzQwNmVhZThkMyIsImlhdCI6MTU5NDM5MzI3NywiZXhwIjoxNTk0NDc5Njc3fQ.BdIGSiyH5AKtoPAvM-7bvezLcUQ0wt_G_h5RcQjBrlw}
Api Payload: {
    "quantity": 1,
    "price": 54000,
    "productId": "5f08537d61c27b2d8417781f"
}

Api Response:
{
    "info": "Cart List",
    "data": {
        "_id": "5f094e3b9e6e261a0ddab9ce",
        "_user": "5f094e1c9e6e261a0ddab9cd",
        "products": [
            {
                "_id": "5f094e3b9e6e261a0ddab9cf",
                "_product": "5f08526c61c27b2d841777aa",
                "quantity": 1,
                "price": 54000
            }
        ],
        "__v": 0
    }
}

# Get Cart product of user

Api Url: http://localhost:3030/api/user/cart
Api Type: GET
Header: Header: {x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMDg3MzU2ZTQxOGE2NzQwNmVhZThkMyIsImlhdCI6MTU5NDM5MzI3NywiZXhwIjoxNTk0NDc5Njc3fQ.BdIGSiyH5AKtoPAvM-7bvezLcUQ0wt_G_h5RcQjBrlw}
Api Response: {
    "STATUS": "SUCCESS",
    "MESSAGE": "All Cart Product",
    "DATA": {
        "_id": "5f0882cf5875958495f5763f",
        "_user": "5f087356e418a67406eae8d3",
        "products": [
            {
                "_id": "5f0882cf5875958495f57640",
                "_product": {
                    "_id": "5f08537d61c27b2d8417781f",
                    "name": "Nikon D540",
                    "description": "A digital camera",
                    "price": 50000,
                    "make": "2007"
                },
                "quantity": 1,
                "price": 54000
            },
            {
                "_id": "5f0882ec5875958495f57641",
                "_product": {
                    "_id": "5f08537d61c27b2d8417781f",
                    "name": "Nikon D540",
                    "description": "A digital camera",
                    "price": 50000,
                    "make": "2007"
                },
                "quantity": 1,
                "price": 54000
            }
        ],
        "__v": 0
    }
}
