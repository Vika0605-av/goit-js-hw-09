const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = {
    email: "",
    message: "",
};

formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
document.addEventListener('DOMContentLoaded', (e) => {
    const zip = localStorage.getItem(STORAGE_KEY);
    if (!zip) {
        return;
    }
    try {
        const data = JSON.parse(zip) || '';
        form.elements.email.value = data.email || '';
        form.elements.message.value = data.message || '';
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
        if (!obj.email && !obj.message) {
            alert('Fill please all fields');
            return;
        }
        console.log(obj);
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
        formData = {
            email: "",
            message: "",
        };
    });
