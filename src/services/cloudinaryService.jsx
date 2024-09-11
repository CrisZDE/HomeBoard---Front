import axios from "axios";

const cloudName = 'dbhspovhe';
const uploadPreset = 'preset_homeBoard';


export const uploadImageToCloudinary = async (file) => {

    const maxFileSize = 5 * 1024 * 1024; 
    const allowedTypes = ["image/jpeg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
        throw new Error("Only JPG and PNG files are allowed.");
    }

    if (file.size > maxFileSize) {
        throw new Error("File size exceeds the maximum limit of 5 MB.");
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData);
        return response.data.secure_url; 
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw new Error("Failed to upload image to Cloudinary.");
    }
}
