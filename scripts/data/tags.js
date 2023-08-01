import { set, get, remove, getAll, removeAll } from "./storage.js";

export async function createTag(name) {
  if (!tagOperationHandler()) return false;
  const tags = await get("tags");
  const originalTagsLength = tags.length;
  const sameTag = findTag(name);
  if (sameTag) return false;
  // ^^ Verify that no tag have the same name, tags have unique names
  tags.push(name);
  // ^^ add the tag to the tags array
  if (tags.length - 1 === originalTagsLength) set("tags", tags);
  //   ^^ Verify that it have added only and only one tag
  return true;
}

export async function removeTag(name) {
  if (!tagOperationHandler()) return false;
  const tags = await get("tags");
  const originalTagsLength = tags.length;
  const sameTag = findTag(name);
  if (!sameTag) return false;
  // ^^ Verify the tag existence
  const indexOfTag = tags.indexOf(name);
  tags.splice(indexOfTag, indexOfTag);
  // ^^ removed the tag from the tags array
  if (tags.length + 1 === originalTagsLength) set("tags", tags);
  //   ^^ Verify that it have removed only and only one tag
  return true;
}

export async function findTag(name) {
  if (!tagOperationHandler()) return false;
  const tags = await get("tags");
  return await tags.find((tag) => tag === name);
}

async function debugAllTagOperations() {
  console.log(await get("tags"));
  console.log(await createTag("coolTag"));

  console.log(await get("tags"));
  console.log(await removeTag("coolTag"));
}

debugAllTagOperations();

async function tagOperationHandler() {
  // Verify that the tags value is available in the storage
  //? Creates one if non are found
  // returns false in rare cases where the creation fails
  const tags = await get("tags");
  if (!tags) {
    const tagsCreate = await set("tags", []);
    if (tagsCreate) return true;
    return false;
  }
  return true;
}
