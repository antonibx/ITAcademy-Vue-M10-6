Vue.component('form-vue', {
    template: //html
    `
    <div>
        <h3>Formulari <img style="max-width: 40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png">UE</h3>
        <form v-on:submit.prevent="onsubmit" class="container p-5 rounded" style="border: 2px solid #35495e; background: #42b88393" onsubmit="this.formulari">
            <div class="form-row">
                <camp tipus="nom" @info="nom = $event" @valid="nom_ok = $event"></camp>
                <camp tipus="mobil" @info="mobil = $event" @valid="mobil_ok = $event"></camp>
            </div>
            <div class="form-row">
                <camp tipus="cpostal" @info="cpostal = $event" @valid="cpostal_ok = $event"></camp>
                <camp tipus="mail" @info="mail = $event" @valid="mail_ok = $event"></camp>
            </div>
            <div class="form-row">
                <camp tipus="pass1" @info="pass1 = $event" @valid="pass1_ok = $event"></camp>
                <camp tipus="pass2" :pass1="pass1" @info="pass2 = $event" @valid="pass2_ok = $event"></camp>
            </div>
            <button type="submit" class="btn btn-dark" @click.prevent="formulari()" data-toggle="modal" data-target="#ModalBootstrap">Registre</button>
        </form>
    </div>
    `, data() {
        return{
            nom: '',    nom_ok: false,
            mobil: '',  mobil_ok: false,
            cpostal: '',cpostal_ok: false,
            mail: '',   mail_ok: false,
            pass1: '',  pass1_ok: false,
            pass2: '',  pass2_ok: false
        };
    }, methods: {
        formulari() {
            if (this.nom_ok && this.mobil_ok && this.cpostal_ok && this.mail_ok && this.pass1_ok && this.pass2_ok) {
                alert(`Felicitats! Tots els camps compleixen els paràmetres de validació. Dades enviades:
                \n Nom: ${this.nom} \n Mobil: ${this.mobil}\n Codi Postal: ${this.cpostal} \n Correu: ${this.mail} \n Contrassenya: ${this.pass1}`);
                //Mostro les dades per comprovar que han arribat al pare, però això no es mostraria en una web real
                //I enlloc d'alerts es podria fer una redirecció a una altra pàgina o mostrar un modal
            } else {
                alert(`Ostres! Algun camp no compleix els paràmetres de validació. Revisa els camps i torna-ho a provar.`);
            }
        }
    }
});