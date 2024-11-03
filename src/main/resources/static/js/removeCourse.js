document.getElementById("removeCourseButton").addEventListener("click", function() {
    document.getElementById("removeCourseForm").style.display = "block";
    document.getElementById("courseForm").style.display = "none";
});

function removeCourseByName(event) {
    event.preventDefault();

    const courseName = document.getElementById("courseName").value.toLowerCase();

    const rows = document.getElementById("courseTable").querySelectorAll("tbody tr");
    let corsoTrovato = false;

    rows.forEach(row => {
        const cella = row.cells[0];
        if (cella.textContent.toLowerCase() === courseName) {
            row.remove();
            corsoTrovato = true;
        }
    });

    if (!corsoTrovato) {
        alert("Corso non trovato!");
    }

    document.getElementById("removeCourseForm").style.display = "none";
    document.getElementById("removeCourseFormByName").reset();
}

document.querySelectorAll(".deleteButton").forEach(button => {
    button.addEventListener("click", function() {
        const row = button.closest("tr");
        row.parentNode.removeChild(row);
    });
});