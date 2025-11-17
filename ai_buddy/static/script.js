// static/script.js
function loadContent() {
    document.getElementById('spinner').classList.remove('spinner-hidden');
    document.getElementById('spinner').classList.add('spinner-visible');
    
    // Simulate a network request or long-running process
    // setTimeout(() => {
    //     document.getElementById('data-display').innerHTML = '<p>Data loaded successfully!</p>';
    //     document.getElementById('spinner').classList.remove('spinner-visible');
    //     document.getElementById('spinner').classList.add('spinner-hidden');
    // }, 2000); // Simulate a 2-second delay
}

async function refreshPartialContent(elementId, url) {
  try {
    const response = await fetch(url); // Fetch new content from the server
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const newContent = await response.text(); // Get the response as text (HTML)
    document.getElementById(elementId).innerHTML = newContent; // Update the target element
  } catch (error) {
    console.error('Error refreshing content:', error);
  }
}

// Example usage:
// To refresh a div with id "myDynamicDiv" by fetching content from "/api/dynamic-content"
// refreshPartialContent('myDynamicDiv', '/api/dynamic-content');