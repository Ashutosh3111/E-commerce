

const isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash('error','You need to login first');
        res.redirect('/login');
    }
    next();
}

module.exports={
    isLoggedIn
}