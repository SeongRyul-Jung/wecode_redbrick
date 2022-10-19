const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Public Data API',
            version: '3.0.0',
            description: '공공데이터 조회 API',
        },
        host: 'localhost:3000',
        basePath: '/'
    },
    apis: ['./src/swagger/*.js']
};

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};
