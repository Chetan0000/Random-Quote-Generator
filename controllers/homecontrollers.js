const USER = require('../models/user');
const QUOTE  = require('../models/quotes');

// async function check(){
//     let find = await QUOTE.find({})
//     const length = find.length;
//     const number = Math.floor(Math.random() * length);

//     let quotes = [find[]]
//     console.log(find[number]);
    
// };

module.exports.home = async(req, res) => {
    
    
        let find = await QUOTE.find({});
        const length = find.length;
        const number = Math.floor(Math.random() * length);
        let data = find[number];
        let body = data.body;
        let by = data.by;
    return res.render('home',{
        title:'Home',
        body:body,
        by:by
    })
}



// function to add user email and name to the data base 
module.exports.user = async (req, res) => {
    let email = req.body.email;
    let find = await USER.find({email});
    if(find.length == 0){
        await USER.create({
            email:email
        })
        .then(done => {
            return res.redirect('back');
        })
        .catch(error => {
            console.log(`Error in adding email to data Base: ${error}`);
            return res.redirect('back');
        })
    }else{
        return res.redirect('back');
    }
    
}

// function to delete user email from data base

module.exports.destroy = async (req, res) => {
    let email = req.body.email;
    let find = await USER.find({email});
    // console.log(find);
    let id = find[0]._id;
    
    await USER.findByIdAndDelete(id)
    .then(done => {
        // console.log(done);
        return res.redirect('back')
    })
    .catch(error => {
        console.log(`Error in deleting user mail from Data base`);
        return res.redirect('back');
    })
    
}


// function to get Random Quote form Data Base
const getTodaysQuote = () => {
    const length = data.length;
    const number = Math.floor(Math.random() * length);
    const todaysQuote = data[number];
    return todaysQuote;
};