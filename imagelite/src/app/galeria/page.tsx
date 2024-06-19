import { ImageCard, Template } from '@/components'


export default function GaleriaPage(){
    return (
        <Template>
            <section className="grid grid-cols-4 gap-8">
                <ImageCard src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" nome='Imagem de campo' tamanho='15mb'/>
                <ImageCard src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" nome='Imagem de campo' tamanho='15mb'/>
                <ImageCard src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" nome='Imagem de campo' tamanho='15mb'/>
                <ImageCard src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" nome='Imagem de campo' tamanho='15mb'/>
                <ImageCard src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" nome='Imagem de campo' tamanho='15mb'/>
            </section>
        </Template>



    )
    
}