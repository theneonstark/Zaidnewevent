import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Disable right-click
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  // alert('Right-click is disabled on this page.');
});

// Disable certain key combinations
document.addEventListener('keydown', (e) => {
  if (
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    (e.ctrlKey && e.key === 'U') || // Ctrl+U
    (e.key === 'F12') // F12
  ) {
    e.preventDefault();
    // alert('This action is disabled.');
  }
});

// Detect if developer tools are open
(function detectDevTools() {
  let open = false;
  const threshold = 160;

  const devtools = {
    open: false,
    orientation: null,
  };

  setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    const orientation = widthThreshold ? 'vertical' : 'horizontal';

    if (
      !(heightThreshold && widthThreshold) &&
      ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) ||
        widthThreshold ||
        heightThreshold)
    ) {
      if (!devtools.open || devtools.orientation !== orientation) {
        devtools.open = true;
        devtools.orientation = orientation;
        console.log('Developer tools are open!');
        alert('Please close developer tools to continue using this page.');
        window.location = 'about:blank'; // Optional: Redirect to a blank page
      }
    } else {
      devtools.open = false;
      devtools.orientation = null;
    }
  }, 500);
})();


// Disable double-click
document.addEventListener('dblclick', (e) => {
  e.preventDefault();
  // alert('Double-click is disabled.');
});

// Disable image dragging
document.addEventListener('dragstart', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
    // alert('Image dragging is disabled.');
  }
});

// Disable text selection
document.addEventListener('selectstart', (e) => {
  e.preventDefault();
  // alert('Text selection is disabled.');
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
