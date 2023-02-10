const db = require('../models/item')
const initial_items = [
    {
        title: "Hacksaw",
        description: "Ya know, just a real good saw that you need to cut things with!",
        image: "https://bynder.sbdinc.com/m/16df0f1cf7ebca04/Drupal_Large-20-036M_A1.jpg"
    },
    {
        title: "Stud Finder",
        description: "Find those studs to support your 30 lb antique wall hanging!",
        image: "https://www.protoolreviews.com/wp-content/uploads/2020/05/Best-Stud-Finder-DeWalt-Stud-Finder10-800x534.jpg"
    },
    {
        title: "Wok",
        description: "Your inlaws are coming to visit and you desperately need to make them an authentic meal! Have no fear!",
        image: "https://cdn.thewirecutter.com/wp-content/media/2023/01/wok-2048px-9090.jpg?auto=webp&quality=60&crop=1.91:1&width=1200"
    },
    {
        title: "Cat Backpack",
        description: "Your kitty needs to go the vet, huh? Forget that ugly carrier, get a backpack instead!",
        image: "https://i.etsystatic.com/22338893/r/il/8c128f/2813755900/il_fullxfull.2813755900_s6zz.jpg"
    },
    {
        title: "Fender Guitar Amp",
        description: "Your drummer forgot the amps...again! Take this puppy on stage and rock the show.",
        image: "https://cdn.mos.cms.futurecdn.net/fzZXdEcRuX6cr5CZexmuwn.jpg"
    },
    
]

db.Item.deleteMany({}, () => {
    db.Item.create(initial_items, (err, items) => {
        if (err) {
            console.log("Error on create items:", err)
        } else {
            console.log("Created", items.length, "items")
        }
    })
})