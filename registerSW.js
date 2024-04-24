// Check that service workers are supported
if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log("Service worker registration successful: ", registration);
      },
      (error) => {
        console.error(`Service worker registration failed: `, error);
      },
    );
  });
} else {
  console.error("Service workers are not supported.");
}
