var a   = require('assert'),
    map = require('..')

suite('map')

test('returns different objects', function(){
    var o1 = map(),
        o2 = map()

    a.notEqual(o1, o2)
})

test('uses `set` with an opts object', function(){
    var o = map({ 
        foo: 'bar',
        baz: 'quux'
    })

    a.equal(o.get('foo'), 'bar')
    a.equal(o.get('baz'), 'quux')
    a.equal(o.get('pretend'), undefined)
})

suite('map.set & map.get')

test('with 2 args, map.set sets a single key val pair, map.get retrieves it', function(){
    var o = map()

    o.set('foo', 'bar')
    a.equal(o.get('foo'), 'bar')
})

test('map.set returns `this`', function(){
    var o = map()
    a.equal(o.set('foo', 'bar'), o)
})

test('with 1 arg, map.set attempts a shallow clone', function(){
    var o = map()
    
    o.set({ 
        foo: 'bar',
        baz: 'quux'
    })

    a.equal(o.get('foo'), 'bar')
    a.equal(o.get('baz'), 'quux')
})

test('map.set can be used with __proto__', function(){
    var o = map()

    o.set('__proto__', 'bar')
    a.equal(o.get('__proto__'), 'bar')
})

test('map.get returns undefined *if* there is no key', function(){
    var o = map()

    a.equal(o.get('foo'), undefined)
    a.equal(o.get('__proto__'), undefined)
})

suite('map.has')

test('returns true if there\'s a prop with the key, false if not', function(){
    var o = map()

    a.equal(o.has('foo'), false)

    o.set('foo', 'bar')
    a.equal(o.has('foo'), true)
})

suite('map.remove')

test('removes an attribute', function(){
    var o = map()
    
    o.set('foo', 'bar')
    a.ok(o.has('foo'))

    o.remove('foo')
    a.ok(!o.has('foo'))
})

test('map.remove returns `this`', function(){
    var o = map()

    o.set('foo', 'bar')

    a.equal(o.remove('foo').remove('pretend'), o)
})
