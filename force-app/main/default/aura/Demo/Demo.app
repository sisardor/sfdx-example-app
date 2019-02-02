<aura:application extends="force:slds">
  <div class="slds-text-heading_large slds-text-align_center slds-box">
    My Demo app
  </div>
  <div class="slds-grid slds-gutters">
    <div class="slds-col">
      <c:helloWorld />
    </div>
    <div class="slds-col">
      <c:EventDemo />
    </div>
  </div>
  <h1>PDF.js Previous/Next example</h1>

  <div>
    <button id="prev">Previous</button>
    <button id="next">Next</button>
    &nbsp; &nbsp;
    <span>Page: <span id="page_num"></span> / <span id="page_count"></span></span>
  </div>

  <canvas id="the-canvas"></canvas>
</aura:application>
