'use client'

import { ChangeEvent, useState } from 'react'

function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  const onFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target

    if (!files) return

    const previewUrl = URL.createObjectURL(files[0])
    setPreview(previewUrl)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        id="media"
        className="invisible h-0 w-0"
      />

      {preview && (
        // eslint-disable-next-line
        <img src={preview} className="aspect-video w-full object-contain" />
      )}
    </>
  )
}

export default MediaPicker
