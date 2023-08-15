// TODO make it take a picture instade 
export function prepareFrame() {
  return new Promise((resolve) => {
    chrome.tabs.captureVisibleTab({ format: "png" }, (screenshotDataUrl) => {
      console.log(screenshotDataUrl)
      resolve(screenshotDataUrl);
    });
  });
}
