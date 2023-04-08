const lineNotify = require('line-notify-nodejs')(
  'B7t6YD5UkTW9pdgGICAMcsRJ53vAdf0cKQwD2dW2m9y'
)

export default async (req, res) => {
  const { selYear } = req.body
  const { selMake } = req.body
  const { selModel } = req.body
  const { selNameUs } = req.body
  const { selTel } = req.body
  const { selLine } = req.body
  const { selCity } = req.body
  const { selGear } = req.body
  const { selColor } = req.body
  const { URLimage } = req.body
  
  if (!selYear && !selMake && !selNameUs) {
    return res.status(400).json({ error: 'MSG is required' })
  }
  try {
    let mxmsg = `NEW ประเมินราคา\nปีรถ: ${selYear}\nยี่ห้อ: ${selMake}\nรุ่น: ${selModel}\nเกียร์: ${selGear}\nสีตัวรถ: ${selColor}\nชื่อติดต่อ: ${selNameUs}\nเบอร์โทร: ${selTel}\nline: ${selLine}\nจังหวัด: ${selCity}`
    lineNotify
      .notify({
        message: mxmsg,
        imageThumbnail: 'https://firebasestorage.googleapis.com/v0/b/car2auto-2023.appspot.com/o/user_uploadsdb4aecef-e538-4cff-a5f3-7c06f3054fa4.jpg?alt=media',
        imageFullsize: 'https://firebasestorage.googleapis.com/v0/b/car2auto-2023.appspot.com/o/user_uploadsdb4aecef-e538-4cff-a5f3-7c06f3054fa4.jpg?alt=media'
      })
      .then(() => {
        console.log('send completed!')
      })
    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

