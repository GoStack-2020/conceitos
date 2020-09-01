import express from 'express';
import createUser from './services/CreateUser';

const app = express();

app.get('/', (request, response) => {
    const user = createUser({
        name: 'Indiara',
        email: 'indiara@mail.com',
        password: '12345',
        techs: ['Node', 'React'],
    });

    return response.json({ message: 'Hello' });
})

app.listen(3333);