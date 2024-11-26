import { Request, Response } from "express";

interface User {
    email: string
    password: string;
}

const users: User[] = [];

const createUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    users.push({ email, password });
    res.status(201).json(users);
}

const getUsers = (req: Request, res: Response) => {
    res.json(users);
}

export { createUser, getUsers };