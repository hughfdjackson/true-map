void function(root){


    var map = function(attrs){
        var o = Object.create(map.prototype)
        o.attributes = Object.create(null)
        if ( attrs ) o.set(attrs)
        return o
    }

    map.prototype = {
        set    : function(key, val){
            if ( val ) this.attributes['$' + key] = val
            else       for ( var p in key ) this.attributes['$' + p] = key[p]
            return this
        },
        get    : function(key){
            return this.attributes['$' + key]
        },
        has    : function(key){
            return '$' + key in this.attributes
        },
        remove : function(key){
            delete this.attributes['$' + key]
            return this
        }
    }

    // alias remove
    map.prototype['delete'] = map.prototype.remove

    if ( typeof module == 'object' && module.exports ) module.exports = map
    else                                               root['trueMap'] = map

}(this)
