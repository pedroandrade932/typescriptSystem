import express from "express";
import cors from "cors";
import { prisma } from "./lib/prisma";

interface createUserBody{
    name: string;
    email: string;
    password: string;
}

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("<html style='background: black; color: white;'><h1>O disquete está funci₢₢do per£¬£¢mente.</h1> <p>Na verdade, é um cartucho.</p></html>")
})

app.post("/create", async (req, res) => {
    const body: createUserBody = req.body;
    const { name, email, password } = body;
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    })
    res.status(200).json({
        name,
        email,
        password
    })
})

app.listen(3333, () => {
    console.log("O disquete está fu₢₢do £¬£¢mente.");
})
