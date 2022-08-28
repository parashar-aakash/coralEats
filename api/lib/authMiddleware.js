function authRole(role) {
    return (req, res, next) => {
        console.log('req.body.role', req.body.role, role);
      if (req.body.role !== role) {
        res.status(401)
        return res.send('Not allowed')
      }
  
      next()
    }
  }
  
  export {
    authRole
  };