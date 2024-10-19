// script.js

// Function to handle the comment submission
document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const commentsSection = document.getElementById("commentsSection");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const userName = document.getElementById("userName").value.trim();
        const userComment = document.getElementById("userComment").value.trim();

        // Check if the inputs are not empty
        if (userName && userComment) {
            // Create a new comment element
            const newComment = document.createElement("div");
            newComment.classList.add("comment");
            newComment.innerHTML = <strong>${userName}</strong>: <p>${userComment}</p>;

            // Append the new comment to the comments section
            commentsSection.appendChild(newComment);

            // Clear the input fields
            commentForm.reset();
        } else {
            alert("Please enter both your name and comment.");
        }
    });
});