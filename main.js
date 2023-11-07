const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");

const updateDetails = (url, title) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
};

const generateMeme = () => {
    fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            const memes = data.data.memes;
            // Select a random meme from the array
            const meme = memes[Math.floor(Math.random() * memes.length)];
            updateDetails(meme.url, meme.name);
        });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme(); // Generate a meme when the page loads