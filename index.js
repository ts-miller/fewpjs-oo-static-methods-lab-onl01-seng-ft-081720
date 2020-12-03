class Formatter {

  static capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  static sanitize(s) {
    const exceptions = ["-", "'", " "]
    return s.replace(/[^a-z0-9+\s\'\-]+/gi, '')
  }

  static titleize(s) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'and', 'from']
    return s.split(' ').map((word, i) => {
      if ((!exceptions.includes(word)) || i === 0 ) {
        return this.capitalize(word)
      } else {
        return word
      }
    }).join(' ')
  }
}