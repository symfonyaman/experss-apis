const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) { 
        const originalFileName = file.originalname;
        const extension = originalFileName.split('.').pop();
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const newFileName = file.fieldname + '-' + uniqueSuffix + '.' + extension;
        cb(null, newFileName);
    }
  });
  
const upload = multer({ storage: storage });

module.exports = upload;