(() => {
  console.log("wa");
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', chrome.runtime.getURL("seesaawiki.jp/hololivetv/css/style.css"));
  document.head.appendChild(link);
  console.log("foo");
})();
