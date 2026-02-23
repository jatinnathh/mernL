export function getAllNotes(req, res){
    res.status(200).send("your notes fetchd fro controller")
}


export function createNote(req,res){
    res.status(201).json({message:"not created successfully"})
}


export function updateNode(req,res)  {
    res.status(200).json({message:"note updates successfully "})
}

export function deleteNode(req,res){
    res.status(200).json({message:"note deleted successfully "})
}