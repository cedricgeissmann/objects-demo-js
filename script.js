class Player {
    constructor(id, name) {
        this.id = id
        this.name = name

        this.hp = 100
        this.armor = 2
        this.dmg = 4
        
        this.target = null
        
        this.render()
    }

    attack() {
        this.target.takeDamage(this.dmg)
    }

    takeDamage(dmg) {
        this.hp = this.hp - dmg
        this.render()
    }

    // Zeigt das Objekt im HTML an, wird auch gebraucht wenn ein Wert ändert.
    render() {
        renderPlayer(this)
    }
}







const p1 = new Player("#player", "Spieler")
const enemy = new Player("#enemy", "Gegner")
p1.target = enemy