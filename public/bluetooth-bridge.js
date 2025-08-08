// Enhanced mobile WebView detection
(function() {
  const isAppCreatorWebView = navigator.userAgent.includes('AppCreatorWebView');
  
  // Mobile WebView communication
  if (isAppCreatorWebView) {
    // Method 1: PostMessage bridge
    window.addEventListener('message', (event) => {
      if (event.data.type === 'bluetoothButtonPress') {
        window.dispatchEvent(new CustomEvent('bluetoothButtonPressed'));
      }
    });

    // Method 2: URL scheme fallback
    window.handleBluetoothPress = function() {
      window.dispatchEvent(new CustomEvent('bluetoothButtonPressed'));
    }
  }
  
  // Standard browser detection
  else {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'MediaPlayPause' || e.key === ' ') {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('bluetoothButtonPressed'));
      }
    });
  }
})();