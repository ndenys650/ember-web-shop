define('web-shop/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('models/category.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/category.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/admin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin.js should pass ESLint\n\n');
  });

  QUnit.test('routes/admin/categories.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/categories.js should pass ESLint\n\n19:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n20:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n21:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n22:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n22:12 - Unexpected console statement. (no-console)\n23:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n24:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n25:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n26:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n26:12 - Unexpected console statement. (no-console)\n27:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n28:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n30:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n31:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n32:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n34:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n35:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n36:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n37:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n38:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n40:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n41:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n42:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });
});