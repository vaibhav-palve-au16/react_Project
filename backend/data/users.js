import bcrypt from 'bcryptjs';


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'vaibhav',
        email: 'vaibhv@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'palve',
        email: 'palve@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]
 
export default  users ;