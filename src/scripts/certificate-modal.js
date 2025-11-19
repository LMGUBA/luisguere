// Certificate Modal Functions
window.openCertificateModal = function() {
  document.getElementById('certificateModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

window.closeCertificateModal = function() {
  document.getElementById('certificateModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Initialize modal events when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Close modal when clicking outside
  window.onclick = function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
      window.closeCertificateModal();
    }
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      window.closeCertificateModal();
    }
  });
});
