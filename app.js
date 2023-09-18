const cloudinary = require('cloudinary').v2

// cloudinary configuaration
const cloudConfig = cloudinary.config({
    cloud_name: 'dzkptpvm3',
    api_key: '629131976113785',
    api_secret: 'wv7PB_L8WMHM02LVRq6NxSmC05Q'

})
const uploadImage = './download.jpeg'

const uploadFile = async () => {
    try {
        const res = await cloudinary.uploader.upload(uploadImage)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

uploadFile()