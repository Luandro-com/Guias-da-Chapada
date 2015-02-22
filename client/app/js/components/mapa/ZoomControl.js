/**
 * The ZoomControl adds +/- button for the map
 *
 */

function ZoomControl(controlDiv, map) {
  
  // Creating divs & styles for custom zoom control
  controlDiv.style.padding = '5px';

  // Set CSS for the control wrapper
  var controlWrapper = document.createElement('div');
  controlWrapper.style.backgroundColor = 'white';
  controlWrapper.style.borderStyle = 'solid';
  controlWrapper.style.borderWidth = '0';
  controlWrapper.style.cursor = 'pointer';
  controlWrapper.style.textAlign = 'center';
  controlWrapper.style.width = '64px'; 
  controlWrapper.style.height = '128px';
  controlWrapper.style.margin = '0 30px 0 0';
  controlDiv.appendChild(controlWrapper);
  
  // Set CSS for the zoomIn
  var zoomInButton = document.createElement('div');
  zoomInButton.style.width = '64px'; 
  zoomInButton.style.height = '64px';
  zoomInButton.style.backgroundColor = '#417505';
  zoomInButton.style.insertBefore = '+';
  /* Change this to be the .png image you want to use */
  // zoomInButton.style.backgroundImage = 'url("http://placehold.it/32/00ff00")';
  controlWrapper.appendChild(zoomInButton);
    
  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('div');
  zoomOutButton.style.width = '64px'; 
  zoomOutButton.style.height = '64px';
  zoomOutButton.style.backgroundColor = 'white';
  /* Change this to be the .png image you want to use */
  // zoomOutButton.style.backgroundImage = 'url("http://placehold.it/32/0000ff")';
  controlWrapper.appendChild(zoomOutButton);

  // Setup the click event listener - zoomIn
  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });
    
  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });  
    
}

module.exports = ZoomControl;