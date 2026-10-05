window.addEventListener('load', function () {
    const catImage = document.getElementById('cat-image');
    const catStatus = document.getElementById('cat-status');
    let restTimer;

    document.getElementById('feed-button').addEventListener('click', function () {
        window.clearTimeout(restTimer);
        catImage.textContent = '😺';
        catImage.className = 'eating';
        catImage.setAttribute('aria-label', 'A cat enjoying food');
        catStatus.textContent = 'Your cat is eating. Yum!';
    });

    document.getElementById('play-button').addEventListener('click', function () {
        window.clearTimeout(restTimer);
        catImage.textContent = '😸';
        catImage.className = 'playing';
        catImage.setAttribute('aria-label', 'A playful cat');
        catStatus.textContent = 'Your cat is playing and feels happy!';
    });

    document.getElementById('rest-button').addEventListener('click', function () {
        window.clearTimeout(restTimer);
        catImage.textContent = '😴';
        catImage.className = 'resting';
        catImage.setAttribute('aria-label', 'A sleeping cat');
        catStatus.textContent = 'Your cat is resting. Good night!';
        restTimer = window.setTimeout(function () {
            catImage.textContent = '😺';
            catImage.className = '';
            catImage.setAttribute('aria-label', 'A rested cat');
            catStatus.textContent = 'Your cat woke up and feels rested!';
        }, 3000);
    });
});
