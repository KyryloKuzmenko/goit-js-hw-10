import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
document.querySelector('.form').addEventListener('submit', function(e){
    e.preventDefault();

    const delay = parseInt(this.elements['delay'].value);
    const state = this.elements['state'].value;

    createPromises(delay, state)
        .then(delay => {
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${delay}ms`,
            });
        })
        .catch(delay => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
            });
        });
    
    this.reset();
})
function createPromises(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}