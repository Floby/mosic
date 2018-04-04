[![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url]

mosic
==================

> echo Mocha + Sinon + Chai as a single setup + other stuff maybe

Bundle of Mocha, Sinon and Chai as if installing the 3 of them was difficult.

Installation
------------

    npm install --save-dev mosic

Usage
-----

You can run it like you would run `mocha`

    $ mosic test

It also exports everything you are going to need


```javascript
const {
  beforeEach,
  describe,
  it,
  expect,
  sinon,
  mock,
  stub,
  spy
} = require('mosic')

describe('My stuff', () => {
  let mySpy
  beforeEach(() => {
    mySpy = spy()
  })
  it('works', () => {
    mySpy()
    expect(mySpy).to.have.been.calledOnce
  })
})
```

Automatic calls to `chai.use(require('sinon-chai'))` and `chai.use(require('chai-as-promised'))` are made.

Exports
-------

#### From `mocha`

+ `describe`
+ `context`
+ `it`
+ `before`
+ `beforeEach`
+ `after`
+ `afterEach`

Although these would be set up as globals by mocha anyway

#### From `chai`

+ `chai`
+ `assert`
+ `expect`
+ `should`

#### From `sinon`

+ `sinon`
+ `spy`
+ `stub`
+ `mock`
+ `clock`


Test
----

You can run the tests with `npm test`. You will need to know [mocha][mocha-url]

Contributing
------------

Anyone is welcome to submit issues and pull requests


License
-------

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 Florent Jaby

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[travis-image]: http://img.shields.io/travis/Floby/mosic/master.svg?style=flat
[travis-url]: https://travis-ci.org/Floby/mosic
[coveralls-image]: http://img.shields.io/coveralls/Floby/mosic/master.svg?style=flat
[coveralls-url]: https://coveralls.io/r/Floby/mosic
[mocha-url]: https://github.com/visionmedia/mocha



