const app = Vue.createApp({

    data() {
        return {
            title: 'Mr',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            gender: 'male',
        }
    },
    methods: {
       getUser() {

         function getValue(url, cb) {
            let xhttp = new XMLHttpRequest();   
    xhttp.onreadystatechange =function() {
        if(this.readyState == 4 && this.status == 200) {
        const{results} =   JSON.parse(this.responseText);
        cb(results);

        }
    }

    xhttp.open("GET", url, true);
    xhttp.send();
    
        }

        getValue("https://randomuser.me/api", (results) => {
            this.title = results[0].name.title;
            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        })

        }
    }
})

app.mount('#app');