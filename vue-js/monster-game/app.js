function getRandomNumber(min, max) {
 return Math.random() * (max - min) + min;
}

const app = Vue.createApp({

  data() {

    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null
    }

  },

  watch: {
    playerHealth(value) {
      if(value <= 0 && this.monsterHealth <= 0) {
        //Draw
        this.winner = "draw"
      }
      else if(value <= 0) {
        //Player Lost
        this.winner ="monster"
      }
    },
    monsterHealth(value) {
      if(value <= 0 && this.playerHealth <= 0) {
        //Draw
        this.winner = "draw"
      }
      else if(value <= 0) {
        //Monster Lost
        this.winner = "player"
      }
    }
  },

  computed: {
    monsterBarStyles() {
      if(this.monsterHealth < 0) {
        return {width: '0%'};
      }
      return {width: this.monsterHealth + '%'};
    },

    playerBarStyles() {
      if(this.playerHealth < 0) {
        return {width: '0%'};
      }
      return {width: this.playerHealth + '%'};
    },

    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0
    }
  },

  methods: {

    startNewGame() {
      this.playerHealth= 100,
      this.monsterHealth= 100,
      this.currentRound= 0,
      this.winner= null
    },
    attackMonster() {
      this.currentRound++;
     const attackDamage = getRandomNumber(5, 12);
     this.monsterHealth -= attackDamage;
     this.attackPlayer();
     console.log(this.monsterHealth);
    },

    attackPlayer() {
      const attackDamage = getRandomNumber(8, 15);
      this.playerHealth -= attackDamage;
    },

    specialAttackMonster() {
      this.currentRound++;
      const attackDamage = getRandomNumber(10, 25);
       this.monsterHealth -= attackDamage;
       this.attackPlayer();
         console.log(this.monsterHealth);
    },

    healPlayer() {
      this.currentRound++;
      const healValue = getRandomNumber(8, 20);
      if(this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      }

      else {
        this.playerHealth += healValue;
      }

      this.attackPlayer();
    },

    surrenderGame() {
      this.winner ="monster";
    }
  },

 

})

app.mount("#game");