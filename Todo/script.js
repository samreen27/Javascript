const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")

addBtn.addEventListener('click', () => {
    addNote()
})

const saveNote = () => {
    const notes = document.querySelectorAll(".note textarea")
    // console.log(notes);
    const data = [];
    notes.forEach((note) => {
        data.push(note.value)
    })
    // console.log(data);
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }

}

function addNote(text = "") {
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `<div class="tool">
                            <i class="save fa-solid fa-floppy-disk"></i>
                            <i class="trash fa-solid fa-trash"></i>
                      </div>
                      <textarea>${text}</textarea>`;
    note.querySelector(".trash").addEventListener("click", () => {
        note.remove();
        saveNote()
    })

    note.querySelector(".save").addEventListener("click", () => {
        saveNote()
    })
    note.querySelector("textarea").addEventListener("focusout",()=>{
        saveNote()
    })
    main.appendChild(note);
    saveNote()
}

(function () {
    const ls_notes = JSON.parse(localStorage.getItem("notes"))
    console.log(ls_notes)
    if (ls_notes == null) {
        addNote()
    } else {
        ls_notes.forEach((ls_note) => {
            addNote(ls_note)
        })
    }

})()