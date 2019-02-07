import { LightningElement, track } from 'lwc';
import NAME_Fields from '@salesforce/schema/Account.Name';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import resourceUrl from '@salesforce/resourceUrl/lib';
// import resourceUrl from '@salesforce/resourceUrl/lib';

export default class HelloWorld extends LightningElement {
  divHeight = 600;
  uiInitialized = false;
  renderedCallback() {
    if (this.uiInitialized) {
        return;
    }
    this.uiInitialized = true;

    Promise.all([
        loadScript(this, resourceUrl + '/webviewer.min.js'),
        loadScript(this, resourceUrl + '/../myfiles/license-keyz.js')
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
    var url = resourceUrl + '/../myfiles/webviewer-demo-annotated.pdf';
    // const viewer = this.template.querySelector('div.pdf_viewer');
    let viewerElement = this.template.querySelector('div')//('div.pdf_viewer');
    let myWebViewer = new PDFTron.WebViewer({
      path: resourceUrl, // path to the PDFTron 'lib' folder on your server
      l: window.sampleL,
      config: '',
      // fullAPI: true,
      initialDoc: url,
    }, viewerElement);
    
    viewerElement.addEventListener('ready', function() {
      // let CoreControls = viewerElement.querySelector('iframe').contentWindow.CoreControls;
      // console.log(CoreControls)
      // console.log(CoreControls.setPDFWorkerPath);
      
      
    })
    
    console.log(myWebViewer);
    
  }

  @track greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}


