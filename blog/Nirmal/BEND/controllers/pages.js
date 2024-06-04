const Page= require('../models/pages');

exports.addPage= async (req,res) => {
    if (req.body){
        new_page={
            title: req.body.title,
            date: req.body.date,
            content: req.body.content,
            img: req.body.img
        }
        newPage= new Page(new_page);
        await newPage.save();
        return ({message: 'Page added successfully'});

    }else{
        return ({message: 'Invalid request'});  
    }
}

exports.getAllPages= async (req,res) => {
    const pages= await Page.find();
    return ({pages: pages});
};

exports.getPage= async (req,res) => {
    id=req.params.id;
    const page= await Page.find({_id: id});
    return ({page: page[0]});
};

exports.deletePage= async (req,res) => {
    id=req.body.id;
    await Page.findByIdAndDelete({_id: id});
    return ({message: 'Page deleted successfully'});
}


exports.updatePage= async (req,res) => {
    id=req.params.id;
    await Page.findByIdAndUpdate({_id: id}, req.body);
    return ({message: 'Page updated successfully'});
    
}

exports.addition= async (req,res) => {
    num1=req.body.num1;
    num2=req.body.num2;
    result= num1+num2;
    return ({result: result});
}
