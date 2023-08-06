import {get , set , remove , removeAll} from "./data/storage.js";

const values = await get("bookmarkObject");
for(let i = 0; i < values.bookmarks.length; i++){
    console.log(values.bookmarks[i]);
}