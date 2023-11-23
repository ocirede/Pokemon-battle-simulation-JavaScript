class AttackSkill  {
    constructor(attack, damage, magic ){
     this.attack = attack || ""
     this.damage = damage 
     this.magic = magic
    }
 
 }

class Pokemon{

    constructor(name, health, magicCost, skills){
        this.name = name || ""
        this.health = health
        this.magicCost = magicCost
        this.skills = skills || []
        this.attacks = 0
    }

    learnAttackSkill(newskill, anotherskill, moreskill){
        this.skills.push(newskill, anotherskill, moreskill)
    }

    showStatus(){
        
        console.log(`${this.name}: Health: ${this.health}, Magic: ${this.magicCost}`)
        

        if(this.attacks > 3){
            return `BATTLE WON BY ${this.name}.`
        } else{
            return `The fight is still on!!!!`
        }

    }

    getMagic(){
      return  this.magicCost += Math.floor(Math.random() * 20);
    }

   

    hasEnoughMagic(skillName) {
            const skill = this.skills.find((s) => s.attack === skillName);
            if(skill !== undefined && this.magicCost >= skill.magic){
                    return true
            }else{
                return false
            }

          }
    

    isAlive(){
        if(this.health > 0){
            return true
        }else{
            return false
        }
    }



    attack(skillName, opponent) {
        
        if (this.isAlive() || opponent.isAlive()) {
          const skill = this.skills.find((s) => s.attack === skillName);
          if (skill && this.hasEnoughMagic(skillName)) {
            this.magicCost -= skill.magic;
            opponent.health -= skill.damage;
            
            this.attacks++;
            opponent.showStatus();

            let message = `\x1b[32m  The attack by ${this.name} with ${skillName} caused to ${opponent.name} a decrease in his/her/their health, which is now ${opponent.health}. During the attack, ${this.name} saw his/her/their magic power decreasing as well, which is at this point ${this.magicCost}.\x1b[0m`;

            if (opponent.health <= 0) {
                message += ` ${opponent.name} is DEAD!!`;
              
              } else {
                message += ` ${this.showStatus()}`;
              }
            return message
          } else {
            return `${this.name} cannot perform the attack with ${skillName}`;
          }
        }else {
         
            return `${this.name} is dead`;
          }
    }
}

    


let Pikachu = new Pokemon("Pikachu", 120, 80);
let Bulbasaur = new Pokemon("Bulbasaur", 95, 105);
let lightning = new AttackSkill("lightning", 40, 30);
let bombing = new AttackSkill("poisonSeed", 20, 20);
let acid = new AttackSkill("acid", 55, 25)
Pikachu.learnAttackSkill(lightning, bombing, acid)
Bulbasaur.learnAttackSkill(bombing, lightning, acid)
Bulbasaur.showStatus()
Pikachu.showStatus()
Pikachu.isAlive()
Bulbasaur.isAlive()
console.log('\x1b[34m\n-----ASCII art----\n\x1b[0m');
console.log( `Hi, I am Pikachu and I am ready to fight`,`
(\__/)
(o^-^)
z(_(")(")
`)
console.log( `Hi, I am Bulbasaur and I can't wait to attack`,`
(\\(\)
( 0.o)
(___)`);
console.log('\x1b[34m\n-----The fighters-----\n\x1b[0m');

console.log(Pikachu)
console.log(Bulbasaur)
console.log('\x1b[34m\n-----01 First attack-----\n\x1b[0m');
console.log(Pikachu.attack("lightning", Bulbasaur));
Pikachu.getMagic()
Pikachu.hasEnoughMagic("lightning")
Bulbasaur.getMagic()
console.log('\x1b[34m\n-----02 Second attack-----\n\x1b[0m');
console.log(Bulbasaur.attack("poisonSeed", Pikachu));
Pikachu.getMagic()
Bulbasaur.getMagic()
Bulbasaur.hasEnoughMagic("lightning")
console.log('\x1b[34m\n-----03 Third attack-----\n\x1b[0m');
console.log(Bulbasaur.attack("lightning", Pikachu));
Pikachu.getMagic()
Bulbasaur.getMagic()
Bulbasaur.hasEnoughMagic("poisonSeed")
console.log('\x1b[34m\n-----04 Fourth attack-----\n\x1b[0m');
console.log(Pikachu.attack("poisonSeed", Bulbasaur));
Pikachu.getMagic()
Pikachu.hasEnoughMagic("poisonSeed")
Bulbasaur.getMagic()
console.log('\x1b[34m\n-----05 fifth attack-----\n\x1b[0m');
console.log(Pikachu.attack("acid", Bulbasaur))
Pikachu.getMagic()
Pikachu.hasEnoughMagic("acid")
Bulbasaur.getMagic()
console.log('\x1b[34m\n-----GAME OVER----\n\x1b[0m');








