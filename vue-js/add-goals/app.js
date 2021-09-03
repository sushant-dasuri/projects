Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
        }
    },
    methods: {
        addGoal() {
            if(this.enteredValue !== '') {
                this.goals.push(this.enteredValue);
                this.enteredValue = "";
            }
            else {
                alert("Please enter a value!!!");
            }
        }
    }
}).mount("#app");