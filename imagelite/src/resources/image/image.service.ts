import { Image } from './image.resources'

class ImageService {
    baseUrl: string = 'http://localhost:8080/images';

    async buscar(query: string='', extencion: string ="") : Promise<Image[]> {
        const url = `${this.baseUrl}?query=${query}&extencion=${extencion}`
        const response = await fetch(url);
        return await response.json();
    }
    async salvar(dados: FormData): Promise<string | null> {
        const response = await fetch(this.baseUrl, {
            method: 'POST', 
            body: dados
        }) 
        return response.headers.get('location')
    }

}


export const useImagesService = () => new ImageService();