import { Image } from './image.resources'

class ImageService {
    baseUrl: string = 'http://localhost:8080/images';

    async buscar() : Promise<Image[]> {
        const response = await fetch(this.baseUrl);
        return await response.json();
    }

}

export const useImagesService = () => new ImageService();