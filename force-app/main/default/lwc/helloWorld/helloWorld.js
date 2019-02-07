import { LightningElement, track } from 'lwc';
import NAME_Fields from '@salesforce/schema/Account.Name';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import resourceUrl from '@salesforce/resourceUrl/lib';
import myfilesUrl from '@salesforce/resourceUrl/myfiles';

export default class HelloWorld extends LightningElement {
  divHeight = 600;
  uiInitialized = false;
  renderedCallback() {
    if (this.uiInitialized) {
        return;
    }
    this.uiInitialized = true;

    Promise.all([
        loadScript(this, resourceUrl + '/webviewer.min.js')
    ])
    .then(() => {

       this.initUI();
    })
    .catch(error => {
      console.log(error);
      if (error.body) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error loading D3',
                message: error.body.message,
                variant: 'error',
            }),
        );
      } else {
        this.dispatchEvent(
          new ShowToastEvent({
              title: 'Error loading D3',
              message: error.message,
              variant: 'error',
          }),
        );
      }
    });
  }
  initUI() {
    console.log()
    console.log(PDFTron, this)
    let me = this;
    var url = 'https://customer-agility-8590-dev-ed.lightning.force.com/resource/1549430028000/myfiles/compressed.tracemonkey-pldi-09.pdf';
    // const viewer = this.template.querySelector('div.pdf_viewer');
    let viewerElement = this.template.querySelector('div')//('div.pdf_viewer');
    let myWebViewer = new PDFTron.WebViewer({
      path: resourceUrl, // path to the PDFTron 'lib' folder on your server
      l: 'demo:sisakov@pdftron.com:750d07bd01a53f57075ae2b0404e99b52d2335d64b4a5e4767',
      custom: JSON.stringify({myObj:'test'}),
      initialDoc: url,
      config: myfilesUrl + '/config.js'
      // initialDoc: '/path/to/my/file.pdf',  // You can also use documents on your server
    }, viewerElement);

    viewerElement.addEventListener('ready', function() {
      let CoreControls = viewerElement.querySelector('iframe').contentWindow.CoreControls;
      console.log(myWebViewer)
      // console.log(CoreControls.setPDFWorkerPath);


    })

    console.log(myWebViewer);

  }

  @track greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}
