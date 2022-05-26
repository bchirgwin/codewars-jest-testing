const { performance, PerformanceObserver } = require ('perf_hooks');

const obs = new PerformanceObserver(items => console.log(items.getEntries()));

obs.observe({entryTypes: ['mark','measure'], buffered: true});

performance.mark('A');
setTimeout( ()=> {
    performance.mark('B');
    performance.measure('A to B', 'A', 'B')
});

