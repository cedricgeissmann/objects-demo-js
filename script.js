

class Weapon {
    constructor(dmg, type) {
        this.dmg = 2 + dmg
        this.type = type
    }
}

class Shield {
    constructor(armor, type) {
        this.armor = 10 + armor
        this.type = type
    }
}




class Player {
    constructor(name, hp, dmg) {
        this.name = name

        this.statsHp = 20 + hp
        this.statsArmor = 8
        this.statsDmg = 4 + dmg
        this.statsMana = 100

        this.maxHealth = this.statsHp
        
        this.target = null
        
        watchElement(this)

        setInterval(() => {
            this.regenerate()
            renderPlayer(this)
        }, 500)
    }

    regenerate() {
        this.statsHp = Math.min(this.statsHp + 2, this.maxHealth)
    }






    actionAttack() {
        if (this.target == null) {
            errorLog("Es ist kein Ziel definiert.")
        }
        
        let doDmg = this.statsDmg

        if (this.weapon) {
            doDmg = doDmg + this.weapon.dmg
            if (this.weapon.type === "axe") {
                doDmg = doDmg * 2
            }
        }

        this.target.takeDamage(doDmg)
    }

    actionDie() {
        this.statsHp = 0
    }

    actionHeal() {
        this.statsHp = this.statsHp + 100
    }

    actionCastfireball() {
        if ( this.statsMana >= 90) {
            this.takeDamage(20)
            this.target.takeDamage(50)
            this.statsMana -= 90
        } else {
            this.takeDamage(10)
        }
    }

    takeDamage(dmg) {
        let takeDmg = dmg

        if (this.shield) {
            takeDmg = takeDmg - this.shield.armor
            if (this.shield.type === "thorns") {
                this.target.takeDamage(this.shield.armor)
            }
        }

        this.statsHp = this.statsHp - takeDmg
    }
}





const p1 = new Player("Spieler", 200, 4)
const enemy = new Player("Gegner", 50, 0)
const enemy2 = new Player("Gegner", 50, 0)
const enemy3 = new Player("Gegner", 50, 0)

p1.target = enemy
enemy.target = p1

p1.weapon = new Weapon(24, "axe")
p1.shield = new Shield(30, "thorns")