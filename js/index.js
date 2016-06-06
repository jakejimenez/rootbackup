  $(document).ready(function() {
    $(".contact-me").click(function() {
      $('#modal1').openModal();
    });
    $(".close-modal1").click(function () {
      $('#modal1').closeModal();
    });
    $(".thingsiknow").click(function() {
      $('#modal2').openModal();
    });
    $(".close-modal2").click(function() {
      $("#modal2").closeModal();
    });
  });
