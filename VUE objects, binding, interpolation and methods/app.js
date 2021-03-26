const app = Vue.createApp({
    data() { //Nos permite definir "variables" manejadas por Vue
        return { //Importante notar que las "variables" definidas aquí no son variables como tal si no atributos de la aplicación vue que creamos
            courseGoalA: 'Finish the course to learn Vue!',
            courseGoalB: 'Being able to build amazing apps!',
            htmlCode: '<h3>Esto es una cabecera incluida en Vue</h3>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: { //Nos permite definir "métodos" manejados por vue
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA; //Como courseGoalA no es una variable si no un atributo de Vue, necesitamos utilizar this. para acceder a ella
            }else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');