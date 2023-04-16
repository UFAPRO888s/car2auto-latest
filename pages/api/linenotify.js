const Cors = require('cors')
const cors = Cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
})

export const config = {
  api: {
    bodyParser: true,
  },
}

const lineNotify = require('line-notify-nodejs')(
  'B7t6YD5UkTW9pdgGICAMcsRJ53vAdf0cKQwD2dW2m9y'
)

//const notify = new lineNotify(`${'B7t6YD5UkTW9pdgGICAMcsRJ53vAdf0cKQwD2dW2m9y'}`);

export default function handlerLine(req, res) {
  const {
    selYear,
    selMake,
    selModel,
    selNameUs,
    selTel,
    selLine,
    selCity,
    pricereq,
    selModelex,
    URLimage,
  } = req.body
  if (selTel == '' || selYear == '' || URLimage == '') {
    return res.status(400).json({ error: 'MSG is required' })
  }
  try {
    let mxmsg = `NEW\nปีรถ: ${selYear}\nยี่ห้อ: ${selMake}\nรุ่น: ${selModel}\nราคา: ${pricereq}\nโฉมรถ: ${selModelex}\nชื่อติดต่อ: ${selNameUs}\nเบอร์โทร: ${selTel}\nline: ${selLine}\nจังหวัด: ${selCity}`
    //console.log(mxmsg,URLimage)
    lineNotify
      .notify({
        message: mxmsg,
        imageThumbnail: URLimage,
        imageFullsize: URLimage,
      })
      .then(() => {
        console.log('send completed!')
        return cors(
          req,
          new Response(JSON.stringify({ message: 'send completed!' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          })
        )
      })
    return cors(
      req,
      new Response(JSON.stringify({ error: '' }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      })
    )
  } catch (error) {
    return cors(
      req,
      new Response(
        JSON.stringify({ error: error.message || error.toString() }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    )
  }
}
