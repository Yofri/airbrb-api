// require('dotenv').config()
import Storage from '@google-cloud/storage'

const storage = Storage({
  projectId: process.env.PROJECT_ID,
  keyFilename: process.env.KEYFILE_PATH,
})
const bucketName = process.env.BUCKET_NAME

const getPublicUrl = filename => {
  return `https://storage.googleapis.com/${bucketName}/userupload/${filename}`
}

function upload(photo) {
  const bucket = storage.bucket(bucketName)
  const newFilename = Date.now() + multerFileObj.originalname
  const newFile = bucket.file('userupload/' + newFilename)

  return new Promise((resolve, reject) => {
    newFile
      .save(photo.buffer, {
        metadata: {
          contentType: file.mimetype,
        },
      })
      .then(() => newFile.makePublic())
      .then(resolve(getPublicUrl(newFilename)))
      .catch(reject)
  })
}

module.exports = {
  GCSUpload : (photos) => {
    console.log(photos)
    /* Promise.all(req.files.map(photo => upload(photo)))
      .then(newPhotos => {
        req.newPhotos = newPhotos
        next()
      })
      .catch(next) */
  }
}