window.CoreControls.setPDFWorkerPath('../../../')
window.CoreControls.setOfficeWorkerPath('../../../office')
window.CoreControls.setOfficeResourcePath('../officeResource');

window.sampleL = ''; // enter your key here so that the samples will run

if (!window.sampleL) {
  window.sampleL = localStorage.getItem('wv-sample-license-key') || window.location.search.slice(5);
  if (!window.sampleL) {
    window.sampleL = window.prompt('No license key is specified.\nPlease enter your key here or add it to license-key.js inside the samples folder.', '');
    if (window.sampleL) {
      localStorage.setItem('wv-sample-license-key', window.sampleL);
    }
  }
}


window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  if (event.isTrusted && typeof event.data === 'object') {
    switch (event.data.type) {
      case 'OPEN_DOCUMENT':
        event.target.readerControl.loadDocument(event.data.file)
        break;
      default:
        break;
    }
  }
}