import Ember from 'ember';

var clienteController = Ember.Controller.extend({
    newCliente: null,
    actions: {
        acceptChanges: function () {
            this.get('newCliente').save().then((cliente) => {
                this.transitionToRoute('cliente');
            });
        }
    }
});
export default clienteController;
