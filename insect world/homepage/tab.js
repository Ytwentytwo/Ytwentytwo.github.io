document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll('.nav a');

  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();

      const tabId = this.getAttribute('data-tab');
      const activeTab = document.getElementById(tabId);

      if (activeTab) {
        document.querySelectorAll('.tab').forEach(tab => {
          tab.style.display = 'none';
        });

        activeTab.style.display = 'block';
      }
    });
  });
});