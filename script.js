
class Weapon {
    constructor(dmg, type) {
        this.dmg = dmg
        this.type = type
    }
}




class Player {
    constructor(name, hp) {
        this.name = name

        this.statsHp = 20 + hp
        this.statsArmor = 8
        this.statsDmg = 4
        this.statsMana = 100
        
        this.target = null
        
        watchElement(this)
    }

    actionAttack() {
        errorLog("Attack!!!")

        let doDmg = this.statsDmg
        
        if (this.weapon) {
            doDmg = doDmg + this.weapon.dmg
            if (this.weapon.type === "axe") {
                doDmg = doDmg * 2
            }
        }

        this.target.takeDamage(doDmg)
    }

    actionHeal() {
        if (this.statsMana >= 33) {
            this.statsHp = 100
            this.statsMana = this.statsMana - 33
        }
    }

    actionBlock() {
        this.statsArmor = this.statsArmor * 2
        this.blocking = true
    }

    takeDamage(dmg) {

        let takeDmg = dmg
        takeDmg = takeDmg - this.statsArmor
        if (takeDmg < 1) {
            takeDmg = 1
        }

        this.statsHp = this.statsHp - takeDmg

        if (this.blocking) {
            this.blocking = false
            this.statsArmor = this.statsArmor / 2
        }
    }
}

const p1 = new Player("Cedric", 200)
p1.weapon = new Weapon(5, "axe")

const enemy = new Player("Gegner", 50)

p1.target = enemy
enemy.target = p1
