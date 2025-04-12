import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import dotenv from "dotenv"

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
})

interface CustomParams {
  folder: string
  allowed_formats: string[]
  transformation: Array<{ width: number; height: number; crop: string }>
}

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "tweets",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 800, height: 800, crop: "limit" }],
  } as CustomParams,
})

export { cloudinary, storage }
