function mostrarSemestre(semestre) {
    // Ocultar todos los semestres
    const semestres = document.querySelectorAll('.semestre');
    semestres.forEach((s) => {
        s.style.display = 'none';
    });

    // Mostrar el semestre seleccionado
    document.getElementById(`semestre-${semestre}`).style.display = 'block';
}
