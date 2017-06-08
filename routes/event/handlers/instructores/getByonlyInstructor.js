const Instructor = require('../../../../models/retiros')

module.exports = (req, res) => {
  const { id } = req.params

  Instructor.findById(id)
    .then(instructores => {
      const action = '/instructores/edited/' + id
      const method = 'PUT'
      const edited = 'Modificar'
      console.log(instructores)
      res.render('add-event', { instructores, action, method, edited })
    })
    .catch(err => { throw err })
  console.log(id)
}
