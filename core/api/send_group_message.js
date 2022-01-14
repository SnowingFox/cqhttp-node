const request = require('./index')

module.exports = (response, message) => {
  if (response.group_id) {
    const url = `/send_group_msg`
    request(url, {
      group_id: response.group_id,
      message,
    }).then(()=> {
      console.log('ok')
    }).catch((err) => {
      console.log(err)
    })
  }
}