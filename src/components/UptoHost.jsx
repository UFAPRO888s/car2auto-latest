import React, { useRef, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from './Container'
function UptoHost() {
  const [file, setFile] = useState('')
  const [data, getFile] = useState({ name: '', path: '' })
  const [progress, setProgess] = useState(0)
  const el = useRef()

  const handleChange = (e) => {
    setProgess(0)
    const file = e.target.files[0]
    console.log(file)
    setFile(file)
  }

  const uploadFile = () => {
    const formData = new FormData()
    formData.append('file', file )
    axios
      .post('https://storage.car2autobuy.com/upload', formData, {
        onUploadProgress: (ProgressEvent) => {
          let progress =
            Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) + '%'
          setProgess(progress)
        },
      })
      .then((res) => {
        console.log(res)
        getFile({
          name: res.data.name,
          path: 'https://storage.car2autobuy.com' + res.data.path,
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <Container>
      <div className="file-upload">
        <input type="file" ref={el} onChange={handleChange} />
        <div className="progessBar">
          {progress}
        </div>
        <Button onClick={uploadFile} className="rounded-md">
          Upload
        </Button>
        <hr />
        
        {data.path && (
          <Image
            src={data.path}
            alt={data.name}
            width={100}
            height={100}
            layout="responsive"
          />
        )}
      </div>
    </Container>
  )
}

export default UptoHost
