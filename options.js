// Saves options to chrome.storage
function save_options() {
    var file = document.getElementById('file').value;
    var likesColor = document.getElementById('like').checked;
    chrome.storage.sync.set({
      favoriteType: file,
      likesColor: likesColor
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value file = 'jpg' and likesColor = true.
    chrome.storage.sync.get({
      favoriteType: 'jpg',
      likesColor: true
    }, function(items) {
      document.getElementById('file').value = items.favoriteType;
      document.getElementById('like').checked = items.likesColor;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);    