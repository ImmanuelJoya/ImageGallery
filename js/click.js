$(document).ready(function () {
    // Add click event listener to buttons with IDs starting with 'click'
    $("button[id^='click']").on("click", function () {
        var buttonId = $(this).attr('id'); // Get the ID of the clicked button
        var modalText = "";

        // Set modalText based on the buttonId
        switch (buttonId) {
            case "click1":
                modalText = "Daffodils in Sentmaring park, Münster, North Rhine-Westphalia, Germany\nBy Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=48211466";
                break;
            case "click2":
                modalText = "Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany\nBy Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=61514522";
                break;
            case "click3":
                modalText = "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany\nBy Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=40957238";
                break;
            case "click4":
                modalText = "Sentmaring Park, Münster, North Rhine-Westphalia, Germany\nBy Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=48576226";
                break;
            case "click5":
                modalText = "Market in Münster, North Rhine-Westphalia, Germany\nBy Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=62071586";
                break;
            default:
                modalText = "No details available";
        }

        // Set the text in the modal and show the modal
        $("#modal-text").text(modalText);
        $("#myModal").modal('show');
    });

    // Add click event listener to close button and any button with class 'btn-secondary'
    $(".close, .btn-secondary").on("click", function () {
        $("#myModal").modal('hide');
    });
});

$(document).ready(function () {
    var text = $("#mainHeading").text();
    var letters = text.split("");
    $("#mainHeading").empty();

    $.each(letters, function (index, letter) {
        $("#mainHeading").append(' <span class="letter">' + letter + '</span>');

    });

    function animateLetters() {
        $(".letter").each(function (index) {
            $(this).delay(index * 200).animate({ opacity: 1 }, 400).delay(1000).animate({ opacity: 0 }, 400);
        });
    }

    animateLetters();
    setInterval(animateLetters, 5000);
});
