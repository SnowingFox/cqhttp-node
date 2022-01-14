module.exports = {
 transformMessage: (str) => {
    if (typeof str !== 'string') {
      return
    }
    const commands = str.split(' ')

    return commands
  }
}