const searchBtn = document.querySelector("#search");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector("#close-btn");
const navBtn = document.querySelector("#menu");
let navIsClosed = true;

navBtn.addEventListener("click", () => {
    const responsiveNav = document.querySelector("#responsive-nav");

    if (navIsClosed) {
        responsiveNav.classList.remove("closed-nav");
        navIsClosed = false;
    } 
    else {
        responsiveNav.classList.add("closed-nav");
        navIsClosed = true;
    };
});

searchBtn.addEventListener("click", () => {
    overlay.classList.remove("closed-overlay");   
});
closeBtn.addEventListener("click", () => {
    overlay.classList.add("closed-overlay");
});

const emptyBlogBlock = document.querySelector(".blog-block");
const blogsContainer = document.querySelector("#blogs");

let position = 0;
const step = 8;

document.addEventListener("DOMContentLoaded",  getGifs(position));

class Blog {
    constructor(blog) {
        this.image = blog.images.original.url;
        this.link = blog.embed_url;
        this.title = blog.title;
        this.date = blog.import_datetime
    }; 
    render() {
        const blogBlock = emptyBlogBlock.cloneNode(true);
        blogBlock.classList.remove("hidden");

        blogBlock.querySelector(".image").src = this.image;
        blogBlock.querySelector(".link").href = this.link;
        blogBlock.querySelector(".blog-title").textContent = this.title;
        
        blogBlock.querySelector(".blog-date").textContent = this.date.replace(/-/g, ".");

        blogsContainer.appendChild(blogBlock);
    };
};

function getGifs(position) {
    let gifsUrl = `http://api.giphy.com/v1/gifs/search?q=dog&api_key=HfG5C4xIbHJUtsczY9ajTm8ohRlw9HpM&offset=${position}&limit=8`; 

    fetch(gifsUrl)
        .then((response) => {
            return response.json();
        })
        .then((responseObject) => {
            const gifsArray = responseObject.data;

            gifsArray.forEach(gifObj => {
                const blog = new Blog(gifObj);
                blog.render();
            });
        });
};

function removeBlogs() {
    const divs = document.querySelectorAll(".blog-block");
    divs.forEach(div => {
        blogsContainer.removeChild(div);
    });
};

const nextGifsBtn = document.querySelector("#next-set");
nextGifsBtn.addEventListener("click", () => {
    removeBlogs();
    position += step;
    getGifs(position);
});

const previousGifsBtn = document.querySelector("#previous-set");
previousGifsBtn.addEventListener("click", () => {
    if (position != 0) {
        removeBlogs(); 
        position -= step;
        getGifs(position);
    };
});