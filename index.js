module.exports = mcflurry
mcflurry.default = mcflurry

function mcflurry(fn, object = {}) {
  return function(next) {
    const current = Object.assign({}, object, next)
    return next ? mcflurry(fn, current) : fn(current)
  }
}
