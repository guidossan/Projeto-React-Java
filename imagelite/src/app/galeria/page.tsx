'use client'

import { ImageCard, Template } from '@/components'
import { useState } from 'react'
import { useImagesService }from '@/resources/image/image.service'
import {Image } from "@/resources/image/image.resources"

export default function GaleriaPage(){
   
    const useService = useImagesService();
    const [images, setImage] = useState<Image[]>([])

    async function searchImages(){
        const result = await useService.buscar();
        setImage(result);
        console.table(result);
    }

    return (
        <Template>
            <button className='bg-gray-500' onClick={searchImages}>Clique para mudar</button> 
            <section className="grid grid-cols-4 gap-8">
                <ImageCard nome="{nomeImage}"tamanho='15mb' src="" />
            </section>
        </Template>



    )
    
}