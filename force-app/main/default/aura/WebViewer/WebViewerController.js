({
    scriptsLoaded: function(component, event, helper) {
        console.log(component, event, helper);
        console.log('scriptsLoaded', this);
        var viewerElement = document.getElementById('viewer');
        var url = 'https://energy-dream-2305-dev-ed.lightning.force.com/resource/1549157318000/myfiles/compressed.tracemonkey-pldi-09.pdf';
        var myWebViewer = new PDFTron.WebViewer({
          path: '/resource/1549157318000/lib/', // path to the PDFTron 'lib' folder on your server
          l: 'demo:sisakov@pdftron.com:750d07bd01a53f57075ae2b0404e99b52d2335d64b4a5e4767',
          initialDoc: url,
          // initialDoc: '/path/to/my/file.pdf',  // You can also use documents on your server
        }, viewerElement);
        
        viewerElement.addEventListener('ready', function() {
            var viewerInstance = myWebViewer.getInstance(); // instance is ready here
            window.viewerInstance = viewerInstance;
          // Call APIs here
        });
      },
      handleChange: function (cmp, event) {
        // This will contain the string of the "value" attribute of the selected option
        var selectedOptionValue = event.getParam("value");
        alert("Option selected with value: '" + selectedOptionValue + "'");
        console.log(window.viewerInstance);
        
    }
})
