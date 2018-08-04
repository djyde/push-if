Array.prototype.pushIf = function (detection, value) {
  if (detection) {
    this.push(value)
  }
  return this
}
