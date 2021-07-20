Vue.component('pare', {
    template: //html
    `
    <div>
        <modal-bs class="animate__animated animate__rubberBand">
            <div slot="header" class="modal-header">
                <h5 class="modal-title">Titol</h5>
                <button type="button" class="btn btn-close" data-dismiss="modal" aria-label="Close" @click="showAlert">X</button>
            </div>
            <div slot="body" class="modal-body">
                <h3>Canvi de moneda</h3>
                <input type="number" v-model="euros" />
                <p>El canvi de {{euros}}€ en dolars són {{euros | dolars}}$</p>
            </div>
            <div slot="footer" class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Tancar</button>
                <button type="button" class="btn btn-primary">Guardar</button>
            </div>
        </modal-bs>
        <div class="alert alert-primary fade" id="alert"> Heu tancat el modal! </div>
    </div>
    `, data() {
        return {
            euros: 0
        };
    }, filters: {
        dolars: function(value) {
            return (value*(1.19)).toFixed(2);
            //A dia 29 de juny de 2020 el canvi és 1€ = 1.19$
        }
    }, methods:{
        showAlert() {
            document.getElementById("alert").setAttribute("class", "alert alert-primary");
        }
    }
});