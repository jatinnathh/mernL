import Note from "../../models/Note.js"

export async function getAllNotes(req, res) {

    try {
        const notes = await Note.find().sort({ createdAt: -1 })
        res.status(200).json(notes)
    } catch (error) {
        console.error("error in get all notes controller")
        res.status(500).json({ message: "internal server error " })
    }
}


export async function getNotebyID(req,res){
    try{
        const note=await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message:"note not found "})
        res.status(200).json(note)
    }catch(error){
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: "note not found " })
        }
        console.error("error in get note by id controller");
        res.status(500).json({ message: "internal server error " })
    }
    }


export async function createNote(req, res) {
    try {
        const { title, content } = req.body
        const note = new Note({ title, content })

        const savedNote = await note.save()
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("error in create note controller")
        res.status(500).json({ message: "internal server error " })
    }
}



export async function updateNode(req, res) {

    try {
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true })

        if (!updatedNote) return res.status(404).json({ message: "note not found " })
        res.status(200).json(updatedNote)
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: "note not found " })
        }
        console.error("error in update note controller");
        res.status(500).json({ message: "internal server error " })
    }
}

export async function deleteNode(req, res) {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) return res.status(404).json({ message: "note not found " })
        res.status(200).json({ message: "note deleted successfully " })
    }catch(error){
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: "note not found " })
        }
        console.error("error in delete note controller");
        res.status(500).json({ message: "internal server error " })
    }
}

export async function cleanupDuplicates(req, res) {
    try {
        const notes = await Note.find()
        const seen = {}
        const toDelete = []

        notes.forEach(note => {
            const key = `${note.title}|${note.content}`
            if (seen[key]) {
                toDelete.push(note._id)
            } else {
                seen[key] = true
            }
        })

        if (toDelete.length > 0) {
            await Note.deleteMany({ _id: { $in: toDelete } })
            res.status(200).json({ message: `Deleted ${toDelete.length} duplicate notes` })
        } else {
            res.status(200).json({ message: "No duplicates found" })
        }
    } catch (error) {
        console.error("error in cleanup duplicates controller");
        res.status(500).json({ message: "internal server error " })
    }
}
