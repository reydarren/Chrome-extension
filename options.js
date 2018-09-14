// Saves options to chrome.storage
function save_options() {
  //gets file type from list on "options.html" and saves it with the chrome.storage api
  var file = document.getElementById('file').value;
  chrome.storage.sync.set({
    favoriteType: file,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value file = 'jpg'
  chrome.storage.sync.get({
    favoriteType: 'jpg',
  }, function(items) {
    document.getElementById('file').value = items.favoriteType;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);    