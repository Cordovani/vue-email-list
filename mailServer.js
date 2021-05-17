// Esercizio di oggi: Vue Email List
// nome repo: vue-email-list

// Descrizione:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.



const app = new Vue({
    el: "#app",
    data: {
        listaEmail: [],
        email: "",
        // numeroEmail: 10
    },
    methods: {
        // metodo per la request HTTP
        loadEmail() {
            // se la lunghezza dell array è uguale a 10 lo resetto 
            // if (this.listaEmail.lenght == 10) {
            //     this.listaEmail = [];
            // }
            for (var i = 0; i < 10; i++) {

                // resetto l'array delle email prima della HTTP request mi assicura che siano sempre 10
                this.listaEmail = [];

                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {

                        // salvo l'email in una variabile e la pusho nell array
                        const randomEmail = resp.data.response;
                        this.listaEmail.push(randomEmail);

                    })

            }


        }
    }

})