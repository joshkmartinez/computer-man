module.exports = (req, res) => {
    res.writeHead(302, {
      'Location': 'https://youtu.be/jeg_TJvkSjg?t=30'
    })
    res.end()
  }