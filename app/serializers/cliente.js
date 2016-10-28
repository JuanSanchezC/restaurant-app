import DS from 'ember-data';
/*
export default DS.JSONAPISerializer.extend({
	primaryKey: 'username'
});*/
 var clienteSerializer = DS.JSONSerializer.extend({
  primaryKey: 'username'
});
export default clienteSerializer;