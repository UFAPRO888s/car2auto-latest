import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useUser } from '@/lib/firebase/useUser'
import { db } from '@/lib/firebase/initFirebase'
import {
  doc,
  setDoc,
  updateDoc,
  collection,
  Timestamp,
  GeoPoint,
} from 'firebase/firestore'
//import WriteToCloudFirestore from '@/components/cloudFirestore/Write'

function UptoHost() {
  const { user } = useUser()
  const [file, setFile] = useState('')
  const [fileList, setFileList] = useState(null)
  const [dataImg, getFile] = useState({ name: '', path: '' })
  const [progress, setProgess] = useState(0)

  //const el = useRef()

  const handleChange = (e) => {
    setProgess(0)
    setFileList(e.target.files)
  }

  const uploadFile = async () => {
    const PathImg = []
    for (let i = 0; i < fileList?.length; i++) {
      const formData = new FormData()
      formData.append(`file`, fileList[i])
      axios
        .post('https://storage.car2autobuy.com/upload', formData, {
          onUploadProgress: (ProgressEvent) => {
            let progress =
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              '%'
            setProgess(progress)
          },
        })
        .then((res) => {
          // console.log({
          //   name: res.data.name,
          //   path: 'https://storage.car2autobuy.com' + res.data.path,
          // })
          //console.log(res.data)
          // const Optrockets = []
          // if (res.data) {
          //   Optrockets.push({
          //     name: res.data.name,
          //     path: 'https://storage.car2autobuy.com' + res.data.path,
          //   })
          // }
          PathImg.push(res.data)
        })
        .catch((err) => console.log(err))
    }
    getFile(PathImg)
  }
  const files = fileList ? [...fileList] : []
  //console.log(dataImg)

  return (
    <div className="flex w-full justify-center gap-4 rounded-md border-2 border-dashed border-gray-300 px-5 pb-6 pt-5">
      <div className="space-y-1 text-center">
        <div className="grid grid-cols-1 text-sm text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <span>รูปภาพ</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              //onChange={(event) => handleChange(event.target.value)}
              onChange={handleChange}
              multiple={true}
            />
          </label>
          <div className="pl-1">
            <div className="progessBar">{progress}</div>
            <Button onClick={uploadFile} className="rounded-md">
              Upload
            </Button>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          อัพโหลดรูปฟรี 24ชั่วโมงไม่เว้นวันหยุดราชการ
        </p>
      </div>
      <div className="w-full">
        <ul className="grid grid-cols-4 gap-2">
          {files.map((file, i) => (
            <li key={i}>
              <div>
                {file ? (
                  <Image
                    src={'https://storage.car2autobuy.com/' + file.name}
                    alt={file.name}
                    width={100}
                    height={100}
                    className="rounded-md object-contain"
                    layout="responsive"
                  />
                ) : (
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <p className="text-xs line-clamp-1">{file.name}</p>
                <input
                  type="hidden"
                  className='text-xs'
                  defaultValue={'https://storage.car2autobuy.com/' + file.name}
                  //onChange={(event) => handleFileChange(event.target.value)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UptoHost
