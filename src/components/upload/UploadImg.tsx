import React, { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import SaveImage from '../../api/image'
import { errorAtom } from '../../recoil/error'
import { imageUrlAtom } from '../../recoil/imageUrl'
import Button from '../basic/Button'
import Label from '../basic/Label'

const UploadImg = () => {
  const [imageUrl, setImageUrl] = useRecoilState(imageUrlAtom)
  const setError = useSetRecoilState(errorAtom)
  const [loading, setLoading] = useState(false)
  const types = ['image/png', 'image/jpeg']

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files[0]) {
      const file = files[0]
      setError('')
      if (types.includes(file.type)) {
        setLoading(true)
        const reader = new FileReader()
        reader.onload = async () => {
          const res: any = await SaveImage({
            name: file.name,
            data: reader.result,
          })
          if (res.data) {
            setImageUrl(res.data.data)
          } else {
            setError(res.message)
          }
          setLoading(false)
        }
        reader.onerror = (err: any) => {
          setLoading(false)
          setError(err.message)
        }
        reader.readAsDataURL(file)
      } else {
        setError('Please select an image file (png or jpg)')
      }
    }
  }
  return (
    <>
      <div>
        <Label htmlFor="product-images" className="">
          Images
        </Label>
        <Button
          className="mx-4 rounded-full w-auto"
          label="+"
          onClick={() => document?.getElementById('product-images')?.click()}
          type={'submit'}
          disabled={loading || imageUrl !== ''}
        />
        <input
          id="product-images"
          type="file"
          onChange={handleChange}
          disabled={loading || imageUrl !== ''}
          className="text-primary-500 font-light dark:text-primary-300 invisible"
        />
      </div>
      {loading && <Label>Uploading...</Label>}
    </>
  )
}

export default UploadImg
