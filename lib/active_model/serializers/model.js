Ep.ActiveModelSerializer = Ep.ModelSerializer.extend({

  keyForType: function(name, type, opts) {
    var key = this._super(name, type);
    if(!opts || !opts.embedded) {
      if(type === 'belongsTo') {
        return key + '_id';
      } else if(type === 'hasMany') {
        return Ember.String.singularize(key) + '_ids';
      }
    }
    return key;
  },

});