function theBeatlesPlay(musicians, instruments) {
    var theBeatles = []
    for (var i=0; i < musicians.lenght; i++) {
        theBeatles.push(`${musicians[i]} plays ${instruments}`)
    }
    return theBeatles
}
