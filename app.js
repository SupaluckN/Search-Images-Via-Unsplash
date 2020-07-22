(() => {

    // Append Image Element.
    function appendImg(keyword, index) {
        const createImg = document.createElement('img');

        createImg.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

        const galleryDiv = document.querySelector('.gallery');

        galleryDiv.appendChild(createImg);
    }

    // Create header content on top of the gallery by append the h2 element.
    function creatText(keyword) {
        const creatText = document.createElement('h2');
        creatText.innerHTML = `The result of ${keyword}:`;

        const galleryDiv = document.querySelector('.gallery');
        galleryDiv.appendChild(creatText);
    }

    // Input Keyword.
    function searchImg(event) {
        // Input keyword value.
        const keyword = event.target.value;

        if (event.key == 'Enter') {
            // Show header content.
            creatText(keyword);

            // Show the gallery from the keyword.
            for (let i = 1; i <= 12; i++) {
                appendImg(keyword, i);
            }

        }
    }

    // the main function for run.
    function run() {
        // Create Events
        const inputKey = document.querySelector('input');
        inputKey.addEventListener('keydown', searchImg);
    }

    run();
})();