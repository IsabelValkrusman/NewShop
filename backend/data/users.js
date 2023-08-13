import bcrypt from 'bcryptjs';

const users= [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Isabel Valk',
        email: 'isabel@email.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Bella',
        email: 'bella@email.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;