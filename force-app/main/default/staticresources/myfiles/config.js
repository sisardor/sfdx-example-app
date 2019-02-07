var custom;
console.log('###### HelloWorld!');
$(document).on('viewerLoaded', function() {
  custom = JSON.parse(window.ControlUtils.getCustomData());
  console.log(custom); // outputs 10
})
window.CoreControls.setPDFWorkerPath('workerDir')
