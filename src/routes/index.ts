import express from 'express';
import home from "@/routes/home"

const router = express.Router()

router.get('/', home)

export default router