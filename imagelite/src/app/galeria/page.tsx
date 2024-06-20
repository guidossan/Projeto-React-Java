'use client'

import { ImageCard, Template } from '@/components'
import { useState } from 'react'
import { useImagesService }from '@/resources/image/image.service'
import {Image } from "@/resources/image/image.resources"

export default function GaleriaPage(){
   
    const useService = useImagesService();
    const [images, setImage] = useState<Image[]>([])
    const [query, setQuery] = useState<string>('')
    const [extencion, setExtencion] = useState<string>('')

    async function searchImages(){
        console.log("Valor digitado", query)
        const result = await useService.buscar(query, extencion);
        setImage(result);

    }

    function renderImageCard(image: Image) {
        return (
            <ImageCard key={image.url} nome={image.name} src={image.url} tamanho={image.size} dataUpload={image.uploadDate}/>
        )
    }

    function renderImageCards(){
        return images.map(image => renderImageCard(image))
    }

    return (
        <Template>
            <section className='flex flex-col items-center justify-center my-5'>
                <div className='flex space-x-4'>
                    <input type="text" className='border px-5 py-2 rounded-lg text-grey-900' onChange={event => setQuery(event.target.value)}/>
                    <select onChange={event => setExtencion(event.target.value)} className='border px-4 py-2 rounded-lg text-grey-900'>
                        <option value=''>All Formats</option>
                        <option value='PNG'>PNG</option>
                        <option value='JPEG'>JPEG</option>
                        <option value='GIF'>GIF</option>
                    </select>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={searchImages}>Search</button>
                    <button className='bg-yellow-500 text-white px-4 py-2 rounded-lg'>Add New</button>
                </div>
            </section>

            <section className="grid grid-cols-4 gap-8">
                {

                    renderImageCards()
                }
            </section>
        </Template>



    )
    
}