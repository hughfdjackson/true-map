# true-map

A true string -> value mapping datatype

## Why

Thanks to `__proto__`, you can no longer add arbitrary strings as object keys without fear of malfunctioning in modern browsers; even in objects created via `Object.create(null)`.  true-map solves that; providing a storage datatype with that intact.

## Example

```javascript
var map = require('true-map')

var person = map({ firstName: 'hugh', lastName: 'jackson' })

person.has('firstName') //= true
person.set({ 
    awesome            : 'hopefully',
    feelingChristmassy : true
})

person.get('awesome') //= "hopefully"
```

## API 

### map([Object])

Creates an empty map, or sets the initial attributes if an object is passed.

```javascript
var o = map()

// or
var you = map({ wise: true, willUseThisLib: true })
```

### .set(String, Value) OR .set(Object)

Sets an attribute, or shallow-clones an object's attributes to the map.

```javascript
var o = map()

o.set('x', 3) 
o.set({ y: 4, z: 5 })

o.has('x') //= true
```

### .get

Gets an attribute.

``` 
var o = map({ x: 3, y: 4 })

o.get('x') //= 3
```

### .has(String)

Returns true or false; same as `key in object` for regular objects:

```
var o = map({ x: 3, y: 4 })

o.has('x') //= true
o.has('z') //= false
```

### .remove(String)

Removes an attribute - same as delete, but it returns the map itself to allow chaining (there are no non-deletable attributes, so returning `true` or `false` is unnecessary)

```
var o = map({ 
    foo: 'bar',
    baz: 'quux'
})

o.remove('foo').remove('baz')
o.has('foo') //= false
```

### .attributes

Where the attributes themselves are stored, with the keys prefixed with '$' to ensure no collision with 'dunder' properties, such as `__proto__`.

## Install 

`npm install true-map` or [download](https://raw.github.com/hughfdjackson/tap/master/tap.js) Creates a CommonJS module if available, otherwise exports a global named `tap`.
