(() => {

    function appendImg(keyword, index) {
        const createImg = document.createElement('img');

        createImg.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

        const galleryDiv = document.querySelector('.gallery');

        galleryDiv.appendChild(createImg);

    }


    function creatText(keyword) {
        const creatText = document.createElement('div');
        creatText.innerHTML = `The result of ${keyword}:`;
        const galleryDiv = document.querySelector('.gallery');
        galleryDiv.appendChild(creatText);
    }

    function searchImg(event) {
        const keyword = event.target.value;

        if (event.key == 'Enter') {
            creatText(keyword)
            for (let i = 1; i <= 12; i++) {
                appendImg(keyword, i);
            }
            console.log(keyword)
        }

    }

    function run() {

        const inputKey = document.querySelector('input');
        inputKey.addEventListener('keydown', searchImg);




    }

    run();
})();