let task = [];

let input = document.getElementById("taskinput");
let button = document.getElementById("addBtn");
let tasklist = document.getElementById("tasklist");
button.addEventListener("click", function () {
  let valeur = input.value;
  if (valeur !== "") {
    task.push(valeur);
    console.log(task);
    input.value = "";
    affichertache();
  }
});

function affichertache() {
  tasklist.innerHTML = "";
  task.forEach((tache, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.textContent = tache;

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "suppr";
    deletebtn.addEventListener("click", () => {
      task.splice(index, 1);
      affichertache();
    });

    let btnmodif = document.createElement("button");
    btnmodif.textContent = "modif";
    btnmodif.addEventListener("click", () => {
      let nouveautext = prompt(" modifie ton texte :", tache);
      if (nouveautext) {
        nouveautext !== null && nouveautext.trim() !== "";
      }
      task[index] = nouveautext;
      affichertache();
    });

    card.appendChild(deletebtn);
    tasklist.appendChild(card);
    btnmodif.appendChild(card);
  });
}
