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
        const creatText = document.createElement('h4');

        creatText.innerHTML = `The result of <span>${keyword}</span> :`;

        const galleryDiv = document.querySelector('.gallery');
        galleryDiv.appendChild(creatText);
    }

    // Set Defualt When Input New Keyword
    function defualt() {
        const creatText = document.createElement('h4');
        creatText.innerHTML = '';

        const galleryDiv = document.querySelector('.gallery');
        galleryDiv.innerHTML = '';
    }

    // Input Keyword.
    function searchImg(event) {
        // Input keyword value.
        const keyword = event.target.value;

        if (event.key == 'Enter' && keyword) {
            // Remove old content before new search.
            defualt()
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