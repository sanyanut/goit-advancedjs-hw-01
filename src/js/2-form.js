let formData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

const setLocalStorage = e => {
  const { name, value } = e.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const submitForm = e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill in all the fields!');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  refs.form.reset();
};

const initiateFormData = () => {
  const formLocalStorage = localStorage.getItem('feedback-form-state');

  if (formLocalStorage) {
    formData = JSON.parse(formLocalStorage);
    refs.email.value = formData.email || '';
    refs.message.value = formData.message || '';
  }

  refs.form.addEventListener('input', setLocalStorage);
  refs.form.addEventListener('submit', submitForm);
};

initiateFormData();
