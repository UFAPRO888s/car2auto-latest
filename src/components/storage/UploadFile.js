// to learn how to download a file, get/use file metadata, delete files, and list files see https://firebase.google.com/docs/storage/web/start
import { useRef, useState } from 'react'
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { initFirebase } from '@/lib/firebase/initFirebase'

initFirebase()
const storage = getStorage()

function fileNameAndExt(str) {
  var filec = str.split('/').pop()
  return [
    filec.substr(0, filec.lastIndexOf('.')),
    filec.substr(filec.lastIndexOf('.') + 1, filec.length),
  ]
}

const UploadFile = () => {
  const inputEl = useRef(null)
  let [value, setValue] = useState(0)
  let [valueImgss, setValueImgss] = useState('')



  function uploadFile() {
    // get file
    var file = inputEl.current.files[0]
    //const filexf = fileNameAndExt(file.name)
    setValueImgss(
      'https://firebasestorage.googleapis.com/v0/b/car2auto-2023.appspot.com/o/' +
        file.name +
        '?alt=media'
    )
    // create a storage ref
    const storageRef = ref(storage, 'user_uploads' + file.name)

    // upload file
    const task = uploadBytesResumable(storageRef, file)

    // update progress bar
    task.on(
      'state_change',

      function progress(snapshot) {
        setValue((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      },

      function error(err) {
        alert(error)
      },

      function complete() {
        alert('Uploaded to firebase storage successfully!')
      }
    )
  }
  //https://firebasestorage.googleapis.com/v0/b/car2auto-2023.appspot.com/o/user_uploadsscreencapture-localhost-3000-car-Nissan-Frontier-Navara-THA6630001164-2023-04-02-14_20_57.png?alt=media
  return (
    <div style={{ margin: '5px 0' }}>
      {valueImgss ? <img width="50" height="auto" src={valueImgss} alt="imgUP" /> : null}
      <progress value={value} max="100" style={{ width: '100%' }}></progress>
      <br />
      <input type="file" onChange={uploadFile} ref={inputEl} />
    </div>
  )
}

export default UploadFile
