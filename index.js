class Formatter {
  //add static methods here
  //is a static method that uppercases the first letter in a String
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //is a static method removes non-alphanumeric characters except for dash, single quote and space
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s-']+/g, "");
  }
  //is a static method
  // capitalizes all words in a sentence except 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'
  // always capitalizes the first word
  static titleize(string) {
    const badWords = [
      "a",
      "an",
      "and",
      "at",
      "but",
      "by",
      "for",
      "from",
      "of",
      "the",
    ];
    let words = string.split(" ");
    let result = [];
    for (let i = 0; i < words.length; i++) {
      if (i == 0) {
        result.push(this.capitalize(words[i]));
      } else {
        if (badWords.includes(words[i])) {
          result.push(words[i]);
        } else {
          result.push(this.capitalize(words[i]));
        }
      }
    }

    return result.join(" ");
  }
}
