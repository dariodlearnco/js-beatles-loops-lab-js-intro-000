function theBeatlesPlay(musicians, instruments) {
    var theBeatles = []
    for (var i=0; i < musicians.length; i++) {
        theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return theBeatles
}

function johnLennonFacts(facts) {
    var i=0
    while (i < facts.length) {
        facts[i] = `${facts[i]}!!!`
    }
    return facts

}
