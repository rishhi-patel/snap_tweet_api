import multer from "multer"
import { storage } from "../utils/cloudinary"
import { Request, Response, NextFunction } from "express"

const upload = multer({ storage }).single("image")

function imageUploadHandler(req: Request, res: Response, next: NextFunction) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: `Multer error: ${err.message}` })
    } else if (err) {
      return res.status(500).json({ error: `Upload failed: ${err.message}` })
    } else {
      return next()
    }
  })
}
export default imageUploadHandler
