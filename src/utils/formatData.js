function FormatData(data) {
  const newdata = Date.parse(data)
  const date = new Date(newdata)
  const mnth = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)
  return [day, mnth, date.getFullYear()].join('/')
}

module.exports = FormatData
