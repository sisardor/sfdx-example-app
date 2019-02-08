var custom;

$(document).on('viewerLoaded', function() {
  custom = JSON.parse(window.ControlUtils.getCustomData());
  // console.log(custom); // outputs 10
})
window.CoreControls.setPDFWorkerPath('../../../')
// CoreControls.setPDFWorkerPath('../../../../../salesforce/fullWorkerDir/');
// window.CoreControls.setPDFResourcePath('../../../resource')
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