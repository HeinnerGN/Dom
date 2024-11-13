function agregar() {
    const input=document.getElementById("input");
    const texto=input.value.trim();

    if (texto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const li=document.createElement("li");
    li.textContent=texto;

    const removeButton=document.createElement("button");
    removeButton.textContent="Eliminar";
    removeButton.classList.add("remove");
    removeButton.onclick=()=>removeTask(li);

    li.onclick=() => toggleComplete(li);
    li.appendChild(removeButton);
    document.getElementById("lista").appendChild(li);

    input.value="";
}

function toggleComplete(task) {
    task.classList.toggle("completed");
}

function removeTask(task) {
    task.remove();
}
