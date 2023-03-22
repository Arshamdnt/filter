
var userNames = ['Ali', 'Amin', 'Amir', 'roz', 'Babak']
var filteredUserNames = userNames.filter(function (username) {
  return username.length > 3
})

console.log(filteredUserNames)