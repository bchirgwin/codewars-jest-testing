const { performance, PerformanceObserver } = require ('perf_hooks');

const obs = new PerformanceObserver(items => console.log(items.getEntries()));

obs.observe({entryTypes: ['function'], buffered: true});

const callback = performance.timerify(()=> {{ /** .. **/}})
const operation = performance.timerify(()=> {{ /** .. **/}})

operation(callback);