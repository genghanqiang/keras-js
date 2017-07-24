describe.only('merge layer: Concatenate', function() {
  const assert = chai.assert
  const styles = testGlobals.styles
  const logTime = testGlobals.logTime
  const stringifyCondensed = testGlobals.stringifyCondensed
  const approxEquals = KerasJS.testUtils.approxEquals
  const layers = KerasJS.layers

  before(function() {
    console.log('\n%cmerge layer: Concatenate', styles.h1)
  })

  /*********************************************************
  * CPU
  *********************************************************/
  describe('CPU', function() {
    before(function() {
      console.log('\n%cCPU', styles.h2)
    })

    it('[merge.Concatenate.0] [CPU] should produce expected values: 1D inputs, axis=-1', function() {
      const key = 'merge.Concatenate.0'
      console.log(`\n%c[${key}] [CPU] 1D inputs, axis=-1`, styles.h3)
      let testLayer1a = new layers.Dense({ units: 2 })
      let testLayer1b = new layers.Dense({ units: 2 })
      let testLayer2 = new layers.Concatenate({ axis: -1 })
      testLayer1a.setWeights(TEST_DATA[key].weights.slice(0, 2).map(w => new KerasJS.Tensor(w.data, w.shape)))
      testLayer1b.setWeights(TEST_DATA[key].weights.slice(2, 4).map(w => new KerasJS.Tensor(w.data, w.shape)))
      let ta = new KerasJS.Tensor(TEST_DATA[key].input.data, TEST_DATA[key].input.shape)
      let tb = new KerasJS.Tensor(TEST_DATA[key].input.data, TEST_DATA[key].input.shape)
      ta = testLayer1a.call(ta)
      tb = testLayer1b.call(tb)
      console.log('%cin', styles.h4, stringifyCondensed(ta.tensor))
      console.log('%cin', styles.h4, stringifyCondensed(tb.tensor))
      const startTime = performance.now()
      let t = testLayer2.call([ta, tb])
      const endTime = performance.now()
      console.log('%cout', styles.h4, stringifyCondensed(t.tensor))
      logTime(startTime, endTime)
      const dataExpected = new Float32Array(TEST_DATA[key].expected.data)
      const shapeExpected = TEST_DATA[key].expected.shape
      assert.deepEqual(t.tensor.shape, shapeExpected)
      assert.isTrue(approxEquals(t.tensor, dataExpected))
    })

    it('[merge.Concatenate.1] [CPU] should produce expected values: 2D inputs, axis=-1', function() {
      const key = 'merge.Concatenate.1'
      console.log(`\n%c[${key}] [CPU] 2D inputs, axis=-1`, styles.h3)
      let testLayer1a = new layers.Dense({ units: 2 })
      let testLayer2a = new layers.RepeatVector({ n: 3 })
      let testLayer1b = new layers.Dense({ units: 2 })
      let testLayer2b = new layers.RepeatVector({ n: 3 })
      let testLayer3 = new layers.Concatenate({ axis: -1 })
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

    it('[merge.Concatenate.2] [CPU] should produce expected values: 2D inputs, axis=-2', function() {
      const key = 'merge.Concatenate.2'
      console.log(`\n%c[${key}] [CPU] 2D inputs, axis=-2`, styles.h3)
      let testLayer1a = new layers.Dense({ units: 2 })
      let testLayer2a = new layers.RepeatVector({ n: 3 })
      let testLayer1b = new layers.Dense({ units: 2 })
      let testLayer2b = new layers.RepeatVector({ n: 3 })
      let testLayer3 = new layers.Concatenate({ axis: -2 })
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

    it('[merge.Concatenate.3] [CPU] should produce expected values: 2D inputs, axis=1', function() {
      const key = 'merge.Concatenate.3'
      console.log(`\n%c[${key}] [CPU] 2D inputs, axis=1`, styles.h3)
      let testLayer1a = new layers.Dense({ units: 2 })
      let testLayer2a = new layers.RepeatVector({ n: 3 })
      let testLayer1b = new layers.Dense({ units: 2 })
      let testLayer2b = new layers.RepeatVector({ n: 3 })
      let testLayer3 = new layers.Concatenate({ axis: 1 })
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

    it('[merge.Concatenate.4] [CPU] should produce expected values: 2D inputs, axis=2', function() {
      const key = 'merge.Concatenate.4'
      console.log(`\n%c[${key}] [CPU] 2D inputs, axis=2`, styles.h3)
      let testLayer1a = new layers.Dense({ units: 2 })
      let testLayer2a = new layers.RepeatVector({ n: 3 })
      let testLayer1b = new layers.Dense({ units: 2 })
      let testLayer2b = new layers.RepeatVector({ n: 3 })
      let testLayer3 = new layers.Concatenate({ axis: 2 })
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
