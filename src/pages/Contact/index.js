
import emailjs from '@emailjs/browser';
export const handleFormSubmit = async (form) => {
  
    const data = {
        name: form.name,
        email: form.email,
        message: form.message
    }
    try {
        await emailjs.send('service_pfbnfjp', 'template_30pixmg',data , '_dY3cpAn70Y3oTEjp')
        .then((result) => {
            console.log(result)
            return true
        }, (error) => {
            return false
        });
    } catch (error) {
        return false
        
    }
};
// function getFormData(object) {
//     const formData = new FormData();
//     Object.keys(object).forEach(key => formData.append(key, object[key]));
//     console.log(formData)
//     return formData;
// }