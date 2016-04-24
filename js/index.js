  $(document).ready(function() {
    $(".contact-me").click(function() {
      $('#modal1').openModal();
    });
    $(".close-modal1").click(function () {
      $('#modal1').closeModal();
      $('#modal2').openModal();
    });
  });