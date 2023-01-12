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
        if (this.target == null) {
            errorLog("Es ist kein Ziel definiert.")
        }
        let doDmg = this.statsDmg
        this.target.takeDamage(doDmg)
    }

    takeDamage(dmg) {
        let takeDmg = dmg
        this.statsHp = this.statsHp - takeDmg
    }
}





const p1 = new Player("Spieler", 200)
const enemy = new Player("Gegner", 50)

p1.target = enemy

