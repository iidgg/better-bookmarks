async function random_function() {
  chrome.bookmarks.getTree().then((a, b, c) => {
    console.log(a); //? << This gives u tree, yay have an apple
  });
}
random_function();
