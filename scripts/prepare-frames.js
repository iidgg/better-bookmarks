export function prepareFrame(url) {
  // Create the outer <a> element
  const linkElement = document.createElement("a");
  linkElement.href = url;
  linkElement.target = "_blank";
  linkElement.className = "linkwrap";

  // Create the <div> element with class "blocker"
  const divElement = document.createElement("div");
  divElement.className = "blocker";

  // Create the <iframe> element
  const iframeElement = document.createElement("iframe");
  iframeElement.src = url;
  iframeElement.width = "640px";
  iframeElement.height = "480px";
  iframeElement.setAttribute("scrolling" , "no");
  iframeElement.frameBorder = "0";
  iframeElement.allowFullscreen = true;

  // Append the <div> and <iframe> elements to the <a> element
  linkElement.appendChild(divElement);
  linkElement.appendChild(iframeElement);

  return linkElement;
}