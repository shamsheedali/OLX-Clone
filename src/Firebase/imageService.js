import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from './firebase';

export const uploadImage = async(file) => {
    try {
        const imageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(imageRef, file);
        const url = await getDownloadURL(imageRef);
        return url;
        
    } catch (error) {
        console.log(error)
    }
}