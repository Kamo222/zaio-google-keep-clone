
class Note {
    constructor(id,title, text){
        this.id = id
        this.title = title
        this.text = text
    }
}

class App {
    constructor(){
        this.notes = []
    }

    addNote(id, {title, text}){
        // const id = '2'
        const newNote  = new Note(id, title, text)
        this.notes = [...this.notes, newNote]
    }

    editNote(id, {title, text}){
        this.notes.map( note => {
            if(note.id == id){
                note.title = title
                note.text = text
            }
        })
    }

    deleteNote(id){
        this.notes = this.notes.filter((note) => note.id != id)
    }

    displayNotes(){
        this.notes.map(note => console.log(`
        ID: ${note.id}
        TITLE: ${note.title}
        TEXT: ${note.text}`))
    }
}

const note1 = {
    title: "Test Title",
    text: "Yebo yes"
}

const updatedNote = {
    title: "Kamohelo",
    text: "The legend"
}

const app = new App();

app.addNote( 0, note1)
app.addNote( 1, note1)
app.addNote( 2, note1)
app.addNote( 3, note1)

app.editNote(2, updatedNote)
app.deleteNote(1)
app.displayNotes()
// setTimeout(() => {
//     app.editNote(2, updatedNote)
//     console.log(app.notes)
// }, 1000)