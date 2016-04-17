import test = require('blue-tape');

import extend = require('extend');

test((t) => {
  t.plan(1);

  let target = {
    a: 1
  };

  let actual = extend(target, { b: 2 });
  t.assert(actual === target, 'returning target');
});
