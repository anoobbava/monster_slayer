new Vue({
    el: "#app",
    data: {
        myHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false

    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.myHealth = 100;
            this.monsterHealth = 100;
        }


    },
    computed: {

    }
})