new Vue({
    el: "#app",
    data: {
        myHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        logDatas: []

    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.myHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function(){
            this.checkWin(5, 10);
        },
        specialAttack: function(){
            this.checkWin(15, 15);
        },
        checkWin: function(mineScore, monsterScore){
            var myValue = Math.floor(Math.random() * mineScore + 1);
            var monsterValue = Math.floor(Math.random() * monsterScore + 1);
            if ((this.myHealth - myValue) <= 0){
                alert('monster Won');
                this.startGame();
            }
            else{
                this.myHealth -= myValue;
                this.logDatas.unshift({ 
                    text: 'Player hits monster for' + myValue + 'points'
                });
            }
            if ((this.monsterHealth - monsterValue) <= 0){
                alert('You Won');
                this.startGame();
            }
            else{
                this.monsterHealth -= monsterValue;
                this.logDatas.unshift({
                    text: 'Monster hits Player for' + monsterValue + 'points'
                });
            }
        },
        heal: function(){
            var myValue = Math.floor(Math.random() * 10 + 1);
            var monsterValue = Math.floor(Math.random() * 5 + 1)
            if ((myValue + this.myHealth) <= 100){
                this.myHealth += myValue;
            }
            if ((monsterValue + this.monsterHealth) <= 100){
                this.monsterHealth += monsterValue;
            }
        },
        giveUp: function(){
            this.startGame();
        }
    }
});