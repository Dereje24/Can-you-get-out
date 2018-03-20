$(document).ready(function () {
    console.log("ready!");

    $('#sidebarCollapse').on('click', function () {
      console.log("button clicked!");
      // $('#sidebar').toggleClass('active');
    });

    $("#sidebarCollapse").on('click', function() {
        $('#sidebar').addClass('active');
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').hide();
    });

});
