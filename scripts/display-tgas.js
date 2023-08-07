import {get , set , remove , removeAll} from "./data/storage.js";
const tagContainer = document.getElementById("tag-container");
const values = await get("bookmarkObject").then((data) => data);
for(let i = 0; i < values.bookmarks.length; i++){
    tagContainer.innerHTML += `<li><a href=${values.bookmarks[i].url}> ${values.bookmarks[i].title} <span>tags:  ${ values.bookmarks[i].tags.join(" ")}  </span></a></li>` ; 
}
