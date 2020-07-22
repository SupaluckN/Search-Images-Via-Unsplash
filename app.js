(() => {

    function appendImg(keyword, index) {
        const createImg = document.createElement('img');
        createImg.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

        const galleryDiv = document.querySelector('.gallery');
        galleryDiv.appendChild(createImg);
    }

    function run() {
        for (let i = 1; i <= 12; i++) {
            appendImg('dog', i);
        }

    }

    run();
})();