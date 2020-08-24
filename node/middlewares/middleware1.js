const { nextTick } = require("process")

const action = (req, res, next) => {
  const host = req.headers.host
  if( !host.includes('loto') && !host.includes('localhost')){
    res.redirect('https://loto.bigbig73.net.br')
  }else{
    next()
  }  
}
module.exports = {
  route: '*',
  action
}