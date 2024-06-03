import * as z from 'zod'

const productSchema = z.object({
    title: z.string().min(5).max(255),
    thumbnail: z.string().min(5).max(255),
    price: z.number().min(0),
    description: z.string()
})

export default productSchema