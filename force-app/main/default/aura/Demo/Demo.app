<aura:application extends="force:slds">
  <!-- Stand-alone static resources -->
  <ltng:require scripts="{!$Resource.lib + '/webviewer.min.js'}" afterScriptsLoaded="{!c.scriptsLoaded}"/>
  
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
  <div id='viewer' style='width: 1024px; height: 600px;'></div>
</aura:application>
