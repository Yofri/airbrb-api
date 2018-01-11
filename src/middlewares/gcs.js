import Storage from '@google-cloud/storage'

const storage = Storage({
  projectId: process.env.PROJECT_ID,
  keyFilename: process.env.KEYFILE_PATH,
})
const bucketName = process.env.BUCKET_NAME

const getPublicUrl = filename => {
  return `https://storage.googleapis.com/${bucketName}/userupload/${filename}`
}

function upload(photoObj) {
  const bucket = storage.bucket(bucketName)
  const newFilename = Date.now()
  const newFile = bucket.file('userupload/' + newFilename)

  return new Promise((resolve, reject) => {
    newFile
      .save(photoObj.buffer, {
        metadata: {
          contentType: photoObj.mimetype,
        },
      })
      .then(() => newFile.makePublic())
      .then(resolve(getPublicUrl(newFilename)))
      .catch(reject)
  })
}

function decodeBase64Image(dataString) {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
  const response = {}

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.mimetype = matches[1];
  response.buffer = Buffer.from(matches[2], 'base64');
  return response;
}

module.exports = photos => {
  return Promise.all(
    photos.map(photo => upload(
      decodeBase64Image(photo)
    ))
  )
}