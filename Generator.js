// Random word picker from array
const ranPicker = array => {
    let num = Math.floor(Math.random() * array.length)
    return array[num]
}

// Random date picker
const ranYear = () => {
    const month = ['January','February','March','April','May','June','July','August','September','October','November','December']
    ranMonth = month[Math.floor(Math.random() * month.length)]
    const year = Math.floor(Math.random() * 80 + 2022)
    return `${ranMonth} of ${year}`
}

// Random words repository

let ranSentence = {
    closePerson: ['wife','cousin','daughter','son','brother','sister'],
    abilityVerb: ['focus','penetrate','overturn','put aside','smash','bomb'],
    abilityNoun: ['brain','eyes','spirit','political orientation','gender','testicles','generosity'],
    consequenceVerb: ['save','salvage','win over','repair','dominate','harvest'],
    consequenceNoun: ['uterus','daily mood','head','will to live','appetite to kill','heart'],
    doToday: ['put your head in the sand','get off your ass','start eating garlic','get wasted'],
    generate () {
        const person = ranPicker(this.closePerson)
        console.log(`In ${ranYear()} your ${person}'s life will depend on your ability to ${ranPicker(this.abilityVerb)} your ${ranPicker(this.abilityNoun)} in order to ${ranPicker(this.consequenceVerb)} your ${person}'s ${ranPicker(this.consequenceNoun)}.`)
        console.log(`God works in mysterious ways but the only way be ready is for you to ${ranPicker(this.doToday)} RIGHT NOW!!`)
    }
}

ranSentence.generate()