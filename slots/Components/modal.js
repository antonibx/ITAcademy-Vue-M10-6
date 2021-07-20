Vue.component('modal-bs', {
    template: //html
    `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <slot name="header"></slot>
          <slot name="body"></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    </div> 
    `
});