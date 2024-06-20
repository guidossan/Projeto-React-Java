'use client'
interface ImageCardProps {
    nome?: string;
    tamanho?: string;
    dataUpload?: string;
    src?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ nome, tamanho, dataUpload, src }: ImageCardProps) => {
    function donwload(){
        window.open(src, '_blank')
    }
    
    return(
        <div onClick={donwload} className='card relative bg-white rounted-md shadow-md transition-transform ease-in duration-300 trasnform hover: shadow-lg hover:-translate-y-2'>
            <img src={src} className='h-56 w-full object-cover rounded-t-md' alt=''/>
            <div className="card-body p-4">
                <h5 className="text-x1 font-semibold mb-2text-gray-600">{nome}</h5>
                <p className="text-gray-600">{tamanho}</p>
                <p className="text-gray-600">{dataUpload}</p>
            </div>
        </div>
    )
}