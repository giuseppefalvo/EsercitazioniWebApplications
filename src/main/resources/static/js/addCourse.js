document.getElementById("addCourseButton").addEventListener("click", function() {
    document.getElementById("courseForm").style.display = "block";
    document.getElementById("removeCourseForm").style.display = "none";
});

document.getElementById("newCourseForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const insegnante = document.getElementById("insegnante").value;
    const disponibilita = document.querySelector('input[name="disponibilita"]:checked').value;

    const table = document.getElementById("courseTable").getElementsByTagName('tbody')[0];

    inserisciRiga(table, nome, insegnante, disponibilita);

    document.getElementById("courseForm").style.display = "none";
    document.getElementById("newCourseForm").reset();
});

function inserisciRiga(table, nome, insegnante, disponibilita){
    const newRow = table.insertRow();

    const nomeCella = newRow.insertCell(0);
    const insegnanteCella = newRow.insertCell(1);
    const disponibilitaCella = newRow.insertCell(2);
    const deleteButtonCell = newRow.insertCell(3);

    nomeCella.textContent = nome;
    insegnanteCella.textContent = insegnante;
    if (disponibilita === "Si") {
        disponibilitaCella.innerHTML = `<i class="fas fa-check"></i>`;
    } else {
        disponibilitaCella.innerHTML = `<i class="fas fa-times"></i>`;
    }
    deleteButtonCell.innerHTML =`<button class="btn btn-danger btn-sm deleteButton"><i class="fa-solid fa-trash"></i></button>`

    deleteButtonCell.querySelector(".deleteButton").addEventListener("click", function() {
        newRow.remove();
    });
}