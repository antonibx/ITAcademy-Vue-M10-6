Vue.component('camp', {
    props: ['tipus', 'pass1'],
    template: //html
    `
    <div class="form-group col-md-6 mb-5" :id="tipus">
        <div style="display:flex">
            <label :for="tipus">{{nom}}: </label>
            <input :type="format" v-model="info" class="camp ml-2">
            <small id="validesaOk" class="text-success form-text invisible" v-if="valid" style="margin-left:-20px"><i class="fas fa-check-circle"></i></small>
            <small id="validesaMal" class="text-danger form-text invisible" v-else style="margin-left:-20px"><i class="fas fa-times-circle"></i></small>
        </div>
        <transition name="fade">
            <small id="alert" class="text-danger form-text" v-if="!valid">{{alerta}}</small> <!--animate__animated animate__rubberBand-->
        </transition>
    </div>
    `, data() {
        return{
            nom:'',
            format: '',
            alerta: '',
            info: '',
            regex: '',
            valid: true,
            show: true
        };
    }, methods: {
        setFormat() {
            switch(this.tipus) {
                case 'nom':
                    this.nom = 'Nom';
                    this.format = 'text';
                    this.alerta = 'El nom ha de tenir entre 6 i 13 caràcters';
                    this.regex = /^[a-zA-Z0-9\_\-]{6,13}$/;
                    break;
                case 'mail':
                    this.nom = 'Correu electrònic';
                    this.format = 'text';
                    this.alerta = 'El correu ha de contenir una @ i un punt';
                    this.regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                    break;
                case 'mobil':
                    this.nom = 'Telèfon mòbil';
                    this.format = 'number';
                    this.alerta = 'El número ha de contenir 9 digits';
                    this.regex = /^[0-9]{9,9}$/;
                    break;
                case 'cpostal':
                    this.nom = 'Codi Postal';
                    this.format = 'number';
                    this.alerta = "El codi postal consta de 5 digits.";
                    this.regex = /^[0-9]{5,5}$/;
                    break;
                case 'pass1':
                    this.nom = 'Contrassenya';
                    this.format = 'password';
                    this.alerta = "La contrassenya ha d'incloure una majúscula, una minúscula i un número";
                    this.regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
                    break;
                case 'pass2':
                    this.nom = 'Repeteix la contrassenya';
                    this.format = 'password';
                    this.alerta = "La contrassenya ha de coincidir amb la contrassenya anterior";
                    break;
                default:
                    this.nom = 'Error';
                    this.format = 'text';
                    this.alerta = 'Alguna cosa no ha anat bé';
                    this.regex = /^[0-9]{5,5}$/;
            }
        },
        validate() {
            if( (this.tipus!=="pass2" && this.regex.test(this.info)) || (this.tipus=="pass2" && this.pass1 == this.info) ) {
                this.valid = true;
                document.getElementById(this.tipus).children[0].children[1].classList.remove('border-danger');
                document.getElementById(this.tipus).children[0].children[1].classList.add('border-success');
            } else {
                this.valid = false;
                document.getElementById(this.tipus).children[0].children[1].classList.remove('border-success');
                document.getElementById(this.tipus).children[0].children[1].classList.add('border-danger');
                document.getElementById(this.tipus).children[0].children[2].classList.remove('invisible');
            }
        }
    }, created() {
        this.setFormat();
    }, updated() {
        this.validate();
        this.$emit('info', this.info);
        this.$emit('valid', this.valid);  
    }
});
