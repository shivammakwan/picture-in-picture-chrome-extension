// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("clicked", request);
  if (request.message === "clicked_browser_action") {
    document.getElementsByTagName("video")[0].requestPictureInPicture();
  }
});
