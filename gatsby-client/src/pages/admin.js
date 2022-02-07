import React, { useState, useCallback, useRef, useEffect } from 'react'
import Layout from '../components/layout';
import Cropper from "react-easy-crop"
import $ from 'jquery'
import getBase64 from '../scripts/getBase64';
import dummy from '../images/4_5 ratio.png'
import DataURL2File from '../scripts/Dataurl2File';

export default function Admin() {
    const file = useRef(null)
    // getBase64()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [image, setImage] = useState({})

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        // console.log(croppedAreaPixels)
        setImage(croppedAreaPixels)
        // console.log(image)
    }, [])

    function uploadImage() {
        if (file.current.files[0]) {
            // const c = new Croppie(tempCanvas.current)
            getBase64(file.current.files[0], result => {
                // console.log(result)
                const c = document.createElement('canvas');
                c.id = "abcd"
                c.style.width = image.width + 'px'
                c.style.height = image.height + 'px'
                c.width = image.width
                c.height = image.height
                var ctx = c.getContext('2d')
                const img = new Image()
                img.src = result
                ctx.drawImage(
                    img,
                    image.x, image.y,
                    image.width, image.height,
                    0, 0,
                    image.width, image.height)
                const file = DataURL2File(c.toDataURL(), new Date().getTime())
                var data = new FormData()
                data.append('file', file);
                fetch('/api/admin/image/upload', {
                    method: "POST",
                    body: data
                })
                c.remove()
                img.remove()
            })

        }
    }

    function downloadImage() {
        if (file.current.files[0]) {
            // const c = new Croppie(tempCanvas.current)
            getBase64(file.current.files[0], result => {
                // console.log(result)
                const c = document.createElement('canvas');
                c.id = "abcd"
                c.style.width = image.width + 'px'
                c.style.height = image.height + 'px'
                c.width = image.width
                c.height = image.height
                var ctx = c.getContext('2d')
                const img = new Image()
                img.src = result
                ctx.drawImage(
                    img,
                    image.x, image.y,
                    image.width, image.height,
                    0, 0,
                    image.width, image.height)
                const file = DataURL2File(c.toDataURL(), new Date().getTime())
                const url = URL.createObjectURL(file)
                const a = document.createElement('a')
                a.setAttribute('href', url)
                a.setAttribute('download', new Date().getTime() + '.png')
                a.click()
                a.remove()
                // console.log(c.toDataURL())
                c.remove()
                img.remove()
            })

        }
    }

    async function Crop() {
        if (file.current.files[0]) {
            // const c = new Croppie(tempCanvas.current)
            getBase64(file.current.files[0], result => {
                // console.log(result)
                const c = document.createElement('canvas');
                c.id = "abcd"
                c.style.width = image.width + 'px'
                c.style.height = image.height + 'px'
                c.width = image.width
                c.height = image.height
                var ctx = c.getContext('2d')
                const img = new Image()
                img.src = result
                ctx.drawImage(
                    img,
                    image.x, image.y,
                    image.width, image.height,
                    0, 0,
                    image.width, image.height
                )
                alert(() => {
                    return (
                        <div className="w-full h-full justify-center">
                            <p className="text-center">Cropped!</p>
                            <img src={c.toDataURL()} className='w-1/2 h-1/2 block mx-auto object-contain' alt="" />
                            <button onClick={uploadImage} className='bg-transparent border-b border-black hover:text-slate-600 text-black mr-7'>Upload</button>
                            <button onClick={downloadImage} className='bg-transparent border-b border-black hover:text-slate-600 text-black'>Download</button>
                        </div>
                    )
                })
            })
        }
    }
    return (
        <Layout className='pb-4'>
            <section>
                <a id="images"></a>
                <div className='h-90vh md:h-40vh w-full mb-[10vh] grid md:grid-rows-1 grid-cols-1 grid-rows-2 md:grid-cols-2 gap-10'>
                    <div className='items-center h-full border-l border-black justify-center flex'>
                        <div className='relative'>
                            <h1 className='text-2xl font-Metric-Light block uppercase text-center mb-4'>Manage Images</h1>
                            <label htmlFor='file' className='absolute left-1/2 -translate-x-1/2 border border-black px-4 text-lg hover:text-white hover:bg-111111 transition-colors duration-300 '>Upload</label>
                            <input ref={file} id='file' type="file" multiple={false} className='invisible' onChange={(e) => {
                                e.preventDefault()
                                if (e.target.files[0])
                                    getBase64(file.current.files[0], result => {
                                        $('.reactEasyCrop_Container')[0]
                                            // $('#cropper')
                                            .children[0].setAttribute('src', result);
                                    })
                            }} />
                        </div>
                    </div>
                    <div className='grid grid-rows-4 gap-x-4 md:grid-cols-4 h-full grid-cols-1 md:grid-rows-1'>
                        <div className='grid-flow-row grid md:row-start-1 row-start-4 align-middle content-center'>
                            <p className='mx-auto'>Finish Cropping</p>
                            <button onClick={Crop} className='border mx-auto border-black px-4 text-lg hover:text-white hover:bg-111111 transition-colors duration-300 block'>Confirm</button>
                        </div>
                        <div className='relative row-span-3 md:row-span-1 col-span-1 h-full md:col-span-3'>
                            <Cropper
                                id='cropper'
                                image={dummy}
                                maxZoom={100}
                                crop={crop}
                                zoom={zoom}
                                aspect={4 / 5}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                        </div>
                    </div>
                </div>
                <hr className='w-full border-t-2 mb-[10vh]' />
                <hr className='invisible' /> {/* this is just so that the margin from the upper <hr> makes the <section> height longer and not push into thin air */}
            </section>
        </Layout>
    )
}
