import { LightningElement, track, wire } from 'lwc';
import NAME_Fields from '@salesforce/schema/Account.Name';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CurrentPageReference } from 'lightning/navigation';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import resourceUrl from '@salesforce/resourceUrl/lib';
import myfilesUrl from '@salesforce/resourceUrl/myfiles';
import { registerListener, unregisterAllListeners } from 'c/pubsub';

export default class HelloWorld extends LightningElement {
  constructor() {
    super();
    this.template.addEventListener('notification', this.handleNotification.bind(this));
  }
  @wire(CurrentPageReference) pageRef;

  handleNotification(){
    console.log("Code runs when event is received");
  }
  connectedCallback() {
      registerListener('fileSelected', this.handleFileSelected, this);
  }

  disconnectedCallback() {
      unregisterAllListeners(this);
  }

  handleFileSelected(file) {
    console.log('handleFileSelected', file);
    this.iframeWindow.postMessage({type: 'OPEN_DOCUMENT', file: file})
  }

  divHeight = 600;
  uiInitialized = false;
  renderedCallback() {
    if (this.uiInitialized) {
        return;
    }
    this.uiInitialized = true;

    Promise.all([
        loadScript(this, resourceUrl + '/webviewer.js')
    ])
    .then(() => {
       this.initUI();
    })
    .catch(console.error);
  }
  initUI() {
    let _this = this;
    var url = resourceUrl + '/../myfiles/webviewer-demo-annotated.pdf';
    // var url = resourceUrl + '/../myfiles/webviewer-demo-annotated.xod';
    // var url = resourceUrl + '/../myfiles/word.docx';

    let viewerElement = this.template.querySelector('div')
    let viewer = new PDFTron.WebViewer({
      path: resourceUrl, // path to the PDFTron 'lib' folder on your server
      initialDoc: url,
      config: myfilesUrl + '/config.js',
      // fullAPI: true,
    }, viewerElement);

    viewerElement.addEventListener('ready', function() {
      _this.iframeWindow = viewerElement.querySelector('iframe').contentWindow
    })
  }
}