import * as z from 'zod';

const authSchema = z.object({
    // username: z.string().min(5).max(255),
    email: z.string().email().min(5),
    password: z.string().min(5)
});

export default authSchema