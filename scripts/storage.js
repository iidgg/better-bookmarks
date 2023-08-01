//? All of these operation will return a promise unless u waited "await"
//? On await it'll resolve the promise and return bare data

function handleNullableData(err) {
  // Handle data operation whenever it fails
  console.warn("Nullable data triggered");
  console.error(err);
  return undefined;
}

export async function set(key, value) {
  // Returns the value on set
  // Returns undefined on fail
  return await chrome.storage.sync
    .set({ [String(key)]: value })
    .then(() => value)
    .catch(handleNullableData);
}

export async function remove(key) {
  // Returns true on removal
  // Returns false on fail
  return await chrome.storage.sync
    .remove(key)
    .then(() => true)
    .catch((err) => {
      handleNullableData(err);
      return false;
    });
}

export async function get(key) {
  // Returns the value on set
  // Returns undefined on fail
  return await chrome.storage.sync
    .get(key)
    .then((result) => result[key])
    .catch(handleNullableData);
}

export async function getAll() {
  // Returns all data on set
  // Returns undefined on fail
  return await chrome.storage.sync
    .get()
    .then((result) => result)
    .catch(handleNullableData);
}

export async function removeAll(key) {
  // Returns true on removal
  // Returns false on fail

  // a layer of mini-protection from cleaning all data
  if (typeof key === "boolean" && key === true) {
    return chrome.storage.sync
      .clear()
      .then(() => true)
      .catch((err) => {
        handleNullableData(err);
        return false;
      });
  }
}

// To debug all operations
//!! (IMPORTANT README) This operation on fails may leave unneeded data behind
//!! assure that the last ("removeAll" backup cleanup) has ran successfully
//!! You can run removeAll in a separate operation after debugging to cleanup
async function debugAllDataOperations() {
  console.log("Set operation: ", await set("coolKey", "coolValue"));
  console.log("Get operation: ", await get("coolKey")); // Set and get operations

  console.log(
    "Get operation for nullable data: ",
    await get("totallyNotCoolKey")
  ); // Get for non existed key

  console.log(
    '(await set("", "<3")) // Set operation with no key: ',
    await set("", "<3")
  ); // Set key with key less than 1 character

  console.log("GetAll operation: ", await getAll());
  console.log("Remove all operation: ", await removeAll(true));
  console.log('GetAll "after removal" operation: ', await getAll()); // getAll and removeAll testing

  console.log("Set operation: ", await set("coolKey", "coolValue"));
  console.log("Set operation: ", await set("coolestKey", "coolestValue")); // Set operation (already tested above) but to test remove

  console.log("GetAll operation: ", await getAll()); // GetAll to verify the set

  console.log("Remove operation: ", await remove("coolKey"));
  console.log("Remove operation: ", await remove("coolestKey")); // Remove operations

  console.log("GetAll operation: ", await getAll()); // GetAll to verify the removal
}
