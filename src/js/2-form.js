const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', e => {
    const formData = new FormData(form);
    const obj = {
        name: formData.get('name'),
        message: formData.get('message'),
    }
    const zip =JSON.stringify(obj);
    localStorage.setItem(STORAGE_KEY, zip);
});
document.addEventListener('DOMContentLoaded', (e) => {
    const zip = localStorage.getItem(STORAGE_KEY);
    try {
        const data = JSON.parse(zip) || '';
        form.elements.email.value = data.email || '';
        form.elevents.name.value = data.message || '';
    }
    catch{

    }
});
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(form);
        const obj = {
            email: formData.get('email'), 
            message: formData.get('message'),
        };
        if (!obj.email || !obj.message) {
            alert('Fill please all fields');
            return;
        }
        console.log(obj);
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
    });
