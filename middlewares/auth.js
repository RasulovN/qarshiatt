const isAuth = (req, res, next) => {
    if(req.session.isLogged) {
        return res.redirect('/')
    }
    next()
}

const protected = (req, res, next) => {
    if(!req.session.isLogged) {
        return res.redirect('/auth/login')
    }
    next()
}
const isAdmin = (req, res, next) => {
    if(!req.user.isAdmin)
    return res.status(403).sen('Murojat rad etildi');
    
    next();
}

module.exports = {
    isAuth,
    protected,
    isAdmin
}