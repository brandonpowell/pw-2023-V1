import React, { useEffect } from 'react';
import Script from 'react-script-tag';

function MyComponent() {
  useEffect(() => {
    // Fetch the widget.js file
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <Script
        type ="text/javascript" 
        src="https://widget.clutch.co/static/js/widget.js"
        async
      />
      <div
        class="clutch-widget" 
        data-url="https://widget.clutch.co" 
        data-widget-type="2" 
        data-height="45" 
        data-nofollow="true" 
        data-expandifr="true" 
        data-scale="100" 
        data-clutchcompany-id="1473869"
      >
      </div>
    </div>
  );
}

export default MyComponent;
