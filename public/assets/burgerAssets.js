// Attach handlers after DOM is fully loaded.
$(function() {
    // Devour button handler
    $(".devour-button").on("click", function(event) {
        var burgerId = $(this).data("id");
        var devourState = $(this).data("burger_name");

        // Set the state
        var devour = {
            devoured: 1
        }

        // Send PUT request to the route
        $.ajax("/api/burgers/" + burgerId, {
            type: "PUT",
            data: devour
        }).then(
            function() {
                console.log("Updated devour state to", devourState);
                location.reload();
            }
        )
    });

    // Create new burger
    $(".btn-danger").on("submit", function(event) {
        // Prevent default
        event.preventDefault();

        var newBurger = {
            burger_name: $("#submit-button").val().trim()
        };

        // Send the POST request to the route
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("New burger created");
                location.reload();
            }
        );
    });
});