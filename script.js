
class Weapon {
    constructor(dmg, type) {
        this.dmg = dmg
        this.type = type
    }
}




class Player {
    constructor(id, name, baseHp) {
        this.id = id
        this.name = name

        this.hp = baseHp + 20
        this.armor = 8
        this.dmg = 4
        
        this.target = null
        
        this.render()
    }

    attack() {

        let doDmg = this.dmg
        
        if (this.weapon) {
            doDmg = doDmg + this.weapon.dmg
            if (this.weapon.type === "axe") {
                doDmg = doDmg * 2
            }
        }

        this.target.takeDamage(doDmg)
    }

    heal() {
        this.hp = 100
        this.render()
    }

    takeDamage(dmg) {

        let takeDmg = dmg
        takeDmg = takeDmg - this.armor
        if (takeDmg < 1) {
            takeDmg = 1
        }

        this.hp = this.hp - takeDmg
        this.render()
    }

    // Zeigt das Objekt im HTML an, wird auch gebraucht wenn ein Wert ändert.
    render() {
        renderPlayer(this)
    }
}

const p1 = new Player("#player", "Cedric", 200)
p1.weapon = new Weapon(5, "axe")

const enemy = new Player("#enemy", "Gegner", 50)

p1.target = enemy
enemy.target = p1
