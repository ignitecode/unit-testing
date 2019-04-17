module.exports = (phrase) => {
  if(typeof phrase === 'undefined')
    throw new Error('Invalid argument supplied: expected phrase as a string.');

  // Is it spelled backwards the same as forwards? ex: mom === true, sad === false (das != sad) (mom == mom)
  return phrase.trim().length > 0 && phrase.split('').reverse().join('') === phrase;
}
