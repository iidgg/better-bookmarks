import {get , set , remove , removeAll} from "./data/storage.js";
const bookmarkContainer = document.getElementById("bookmark-container");
const tagListContainer = document.getElementById("tag-list-container");
const tags = await get("tags").then((data) => data);
const values = await get("bookmarkObject").then((data) => data);
for(let i = 0; i < values.bookmarks.length; i++){
    bookmarkContainer.innerHTML += `<li><a href=${values.bookmarks[i].url}> ${values.bookmarks[i].title} <span>tags:  ${ values.bookmarks[i].tags.join(" ")}  </span></a></li>` ; 
}
for(let i= 0; i < tags.length; i++){
    tagListContainer.innerHTML += `<li class="liContainer"><span>${tags[i]}</span></li>` ;
}

const liContainer = document.getElementsByClassName("liContainer");
for(let i = 0; i < liContainer.length; i++){
    liContainer[i].addEventListener("click" , () => {
        liContainer[i].classList.toggle("tag-active");
    })
}