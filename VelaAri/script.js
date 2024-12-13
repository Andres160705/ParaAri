document.addEventListener('DOMContentLoaded', function() {
    const candle = document.getElementById('candle');
    const message = document.getElementById('message');
    const body = document.body;
    let isLit = false;

    candle.addEventListener('click', function() {
        isLit = !isLit;
        if (isLit) {
            this.classList.add('lit');
            body.classList.add('lit');
            message.textContent = 'Haz clic en la vela para apagarla';
        } else {
            this.classList.remove('lit');
            body.classList.remove('lit');
            message.textContent = 'Haz clic en la vela para encenderla';
        }
    });
});

