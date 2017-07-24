describe.only('merge layer: Dot', function() {
  const assert = chai.assert
  const styles = testGlobals.styles
  const logTime = testGlobals.logTime
  const stringifyCondensed = testGlobals.stringifyCondensed
  const approxEquals = KerasJS.testUtils.approxEquals
  const layers = KerasJS.layers

  before(function() {
    console.log('\n%cmerge layer: Dot', styles.h1)
  })

  /*********************************************************
  * CPU
  *********************************************************/
  describe('CPU', function() {
    before(function() {
      console.log('\n%cCPU', styles.h2)
    })

    it('[merge.Dot.0] [CPU] should produce expected values: 2D x 2D inputs, axes=1, normalize=False', function() {
      const key = 'merge.Dot.0'
      console.log(`\n%c[${key}] [CPU] 2D x 2D inputs, axes=1, normalize=False`, styles.h3)
      let testLayer1a = new layers.Dense({ units: 2 })
      let testLayer2a = new layers.RepeatVector({ n: 3 })
      let testLayer1b = new layers.Dense({ units: 2 })
      let testLayer2b = new layers.RepeatVector({ n: 3 })
      let testLayer3 = new layers.Dot({ axes: 1, normalize: false })
      testLayer1a.setWeights(TEST_DATA[key].weights.slice(0, 2).map(w => new KerasJS.Tensor(w.data, w.shape)))
      testLayer1b.setWeights(TEST_DATA[key].weights.slice(2, 4).map(w => new KerasJS.Tensor(w.data, w.shape)))
      let ta = new KerasJS.Tensor(TEST_DATA[key].input.data, TEST_DATA[key].input.shape)
      let tb = new KerasJS.Tensor(TEST_DATA[key].input.data, TEST_DATA[key].input.shape)
      ta = testLayer1a.call(ta)
      ta = testLayer2a.call(ta)
      tb = testLayer1b.call(tb)
      tb = testLayer2b.call(tb)
      console.log('%cin', styles.h4, stringifyCondensed(ta.tensor))
      console.log('%cin', styles.h4, stringifyCondensed(tb.tensor))
      const startTime = performance.now()
      let t = testLayer3.call([ta, tb])
      const endTime = performance.now()
      console.log('%cout', styles.h4, stringifyCondensed(t.tensor))
      logTime(startTime, endTime)
      const dataExpected = new Float32Array(TEST_DATA[key].expected.data)
      const shapeExpected = TEST_DATA[key].expected.shape
      assert.deepEqual(t.tensor.shape, shapeExpected)
      assert.isTrue(approxEquals(t.tensor, dataExpected))
    })

    it('[merge.Dot.1] [CPU] should produce expected values: 2D x 2D inputs, axes=2, normalize=False', function() {
      const key = 'merge.Dot.1'
      console.log(`\n%c[${key}] [CPU] 2D x 2D inputs, axes=2, normalize=False`, styles.h3)
      let testLayer1a = new layers.Dense({ units: 2 })
      let testLayer2a = new layers.RepeatVector({ n: 3 })
      let testLayer1b = new layers.Dense({ units: 2 })
      let testLayer2b = new layers.RepeatVector({ n: 3 })
      let testLayer3 = new layers.Dot({ axes: 2, normalize: false })
      testLayer1a.setWeights(TEST_DATA[key].weights.slice(0, 2).map(w => new KerasJS.Tensor(w.data, w.shape)))
      testLayer1b.setWeights(TEST_DATA[key].weights.slice(2, 4).map(w => new KerasJS.Tensor(w.data, w.shape)))
      let ta = new KerasJS.Tensor(TEST_DATA[key].input.data, TEST_DATA[key].input.shape)
      let tb = new KerasJS.Tensor(TEST_DATA[key].input.data, TEST_DATA[key].input.shape)
      ta = testLayer1a.call(ta)
      ta = testLayer2a.call(ta)
      tb = testLayer1b.call(tb)
      tb = testLayer2b.call(tb)
      console.log('%cin', styles.h4, stringifyCondensed(ta.tensor))
      console.log('%cin', styles.h4, stringifyCondensed(tb.tensor))
      const startTime = performance.now()
      let t = testLayer3.call([ta, tb])
      const endTime = performance.now()
      console.log('%cout', styles.h4, stringifyCondensed(t.tensor))
      logTime(startTime, endTime)
      const dataExpected = new Float32Array(TEST_DATA[key].expected.data)
      const shapeExpected = TEST_DATA[key].expected.shape
      assert.deepEqual(t.tensor.shape, shapeExpected)
      assert.isTrue(approxEquals(t.tensor, dataExpected))
    })

    it('[merge.Dot.2] [CPU] should produce expected values: 2D x 2D inputs, axes=1, normalize=True', function() {
      const key = 'merge.Dot.2'
      console.log(`\n%c[${key}] [CPU] 2D x 2D inputs, axes=1, normalize=True`, styles.h3)
      let testLayer1a = new layers.Dense({ units: 2 })
      let testLayer2a = new layers.RepeatVector({ n: 3 })
      let testLayer1b = new layers.Dense({ units: 2 })
      let testLayer2b = new layers.RepeatVector({ n: 3 })
      let testLayer3 = new layers.Dot({ axes: 1, normalize: true })
      testLayer1a.setWeights(TEST_DATA[key].weights.slice(0, 2).map(w => new KerasJS.Tensor(w.data, w.shape)))
      testLayer1b.setWeights(TEST_DATA[key].weights.slice(2, 4).map(w => new KerasJS.Tensor(w.data, w.shape)))
      let ta = new KerasJS.Tensor(TEST_DATA[key].input.data, TEST_DATA[key].input.shape)
      let tb = new KerasJS.Tensor(TEST_DATA[key].input.data, TEST_DATA[key].input.shape)
      ta = testLayer1a.call(ta)
      ta = testLayer2a.call(ta)
      tb = testLayer1b.call(tb)
      tb = testLayer2b.call(tb)
      console.log('%cin', styles.h4, stringifyCondensed(ta.tensor))
      console.log('%cin', styles.h4, stringifyCondensed(tb.tensor))
      const startTime = performance.now()
      let t = testLayer3.call([ta, tb])
      const endTime = performance.now()
      console.log('%cout', styles.h4, stringifyCondensed(t.tensor))
      logTime(startTime, endTime)
      const dataExpected = new Float32Array(TEST_DATA[key].expected.data)
      const shapeExpected = TEST_DATA[key].expected.shape
      assert.deepEqual(t.tensor.shape, shapeExpected)
      assert.isTrue(approxEquals(t.tensor, dataExpected))
    })

    it('[merge.Dot.3] [CPU] should produce expected values: 2D x 2D inputs, axes=2, normalize=True', function() {
      const key = 'merge.Dot.3'
      console.log(`\n%c[${key}] [CPU] 2D x 2D inputs, axes=2, normalize=True`, styles.h3)
      let testLayer1a = new layers.Dense({ units: 2 })
      let testLayer2a = new layers.RepeatVector({ n: 3 })
      let testLayer1b = new layers.Dense({ units: 2 })
      let testLayer2b = new layers.RepeatVector({ n: 3 })
      let testLayer3 = new layers.Dot({ axes: 2, normalize: true })
      testLayer1a.setWeights(TEST_DATA[key].weights.slice(0, 2).map(w => new KerasJS.Tensor(w.data, w.shape)))
      testLayer1b.setWeights(TEST_DATA[key].weights.slice(2, 4).map(w => new KerasJS.Tensor(w.data, w.shape)))
      let ta = new KerasJS.Tensor(TEST_DATA[key].input.data, TEST_DATA[key].input.shape)
      let tb = new KerasJS.Tensor(TEST_DATA[key].input.data, TEST_DATA[key].input.shape)
      ta = testLayer1a.call(ta)
      ta = testLayer2a.call(ta)
      tb = testLayer1b.call(tb)
      tb = testLayer2b.call(tb)
      console.log('%cin', styles.h4, stringifyCondensed(ta.tensor))
      console.log('%cin', styles.h4, stringifyCondensed(tb.tensor))
      const startTime = performance.now()
      let t = testLayer3.call([ta, tb])
      const endTime = performance.now()
      console.log('%cout', styles.h4, stringifyCondensed(t.tensor))
      logTime(startTime, endTime)
      const dataExpected = new Float32Array(TEST_DATA[key].expected.data)
      const shapeExpected = TEST_DATA[key].expected.shape
      assert.deepEqual(t.tensor.shape, shapeExpected)
      assert.isTrue(approxEquals(t.tensor, dataExpected))
    })

    it('[merge.Dot.4] [CPU] should produce expected values: 2D x 2D inputs, axes=(2,2), normalize=True', function() {
      const key = 'merge.Dot.4'
      console.log(`\n%c[${key}] [CPU] 2D x 2D inputs, axes=(2,2), normalize=True`, styles.h3)
      let testLayer1a = new layers.Dense({ units: 2 })
      let testLayer2a = new layers.RepeatVector({ n: 3 })
      let testLayer1b = new layers.Dense({ units: 2 })
      let testLayer2b = new layers.RepeatVector({ n: 3 })
      let testLayer3 = new layers.Dot({ axes: [2, 2], normalize: true })
      testLayer1a.setWeights(TEST_DATA[key].weights.slice(0, 2).map(w => new KerasJS.Tensor(w.data, w.shape)))
      testLayer1b.setWeights(TEST_DATA[key].weights.slice(2, 4).map(w => new KerasJS.Tensor(w.data, w.shape)))
      let ta = new KerasJS.Tensor(TEST_DATA[key].input.data, TEST_DATA[key].input.shape)
      let tb = new KerasJS.Tensor(TEST_DATA[key].input.data, TEST_DATA[key].input.shape)
      ta = testLayer1a.call(ta)
      ta = testLayer2a.call(ta)
      tb = testLayer1b.call(tb)
      tb = testLayer2b.call(tb)
      console.log('%cin', styles.h4, stringifyCondensed(ta.tensor))
      console.log('%cin', styles.h4, stringifyCondensed(tb.tensor))
      const startTime = performance.now()
      let t = testLayer3.call([ta, tb])
      const endTime = performance.now()
      console.log('%cout', styles.h4, stringifyCondensed(t.tensor))
      logTime(startTime, endTime)
      const dataExpected = new Float32Array(TEST_DATA[key].expected.data)
      const shapeExpected = TEST_DATA[key].expected.shape
      assert.deepEqual(t.tensor.shape, shapeExpected)
      assert.isTrue(approxEquals(t.tensor, dataExpected))
    })
  })
})
