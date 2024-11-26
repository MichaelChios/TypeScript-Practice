import {object, string} from 'yup';

interface User {
    email: string;
    password: string;
}

const userSchema = object({
    body: object({
        email: string().email('Invalid email').required("Email is required"),
        password: string().min(6, "Must be at least 6 characters long").required("Password is required")
    }),
})

export default userSchema;

