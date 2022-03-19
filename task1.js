function longestWord(sentence) {
    clean_sentence = sentence.toLowerCase().replace(/[.!,\-?@#$%^&*()"“]/g,'').split(' ')

    find_longest_and_most_vowel = clean_sentence.map((e) => {
        return {'word':e, 'count_vowel':e.match(/[aiueo]/g).length}
    })
    find_longest_and_most_vowel.sort((x,y) => {
        return y.count_vowel - x.count_vowel
    })
    console.log(find_longest_and_most_vowel[0].word)
}

input = '“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)'

longestWord(input)