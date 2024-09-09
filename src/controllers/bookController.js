const Book = require("../models/book");

exports.createBook = async (req , res)=> {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.status(201).json(savedBook);

    }catch (error){
        res.status(500).json({error: error.message});
  }
}

exports.getAllBooks = async (req , res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.getBook = async (req , res) =>{
    try {
        const {id} = req.params
        const book = await Book.findById(id)
        if(!book) return res.status(404).json({message: "Book not found"})
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({error: error.message})
}}

exports.deleteAllBooks = async (req , res) =>{
    try {
        await Book.deleteMany()
        res.status(200).json({message: "All books deleted"})
    } catch (error) {
        res.status(500).json({error: error.message});
}
}

exports.deleteBook = async ( req , res)=> {
    try {
        const {id} = req.params
        const book = await Book.findByIdAndDelete(id)
        if(!book) return res.status(404).json({message: "Book not found"})
        res.status(200).json({message: "Book deleted"})
    } catch (error) {
        res.status(500).json({error: error.message});
}}

exports.updateBook = async (req , res) => {
    try {
        const {id} = req.params
        const book = await Book.findByIdAndUpdate(id, req.body, {new: true})
        if(!book) return res.status(404).json({message: "Book not found"})
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({error: error.message})
}}