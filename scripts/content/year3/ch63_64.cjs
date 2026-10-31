const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { round, sum, ratio, pct, table, near } = require('../diLib.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);
const pad = (val, d) => { const w = near(val, d); for (const k of [1, 2, 3, 4, -1, -2, 5]) { if (w.length >= 3) break; const x = round(val + k * (d ? 10 ** -d : 1), d); if (x !== val && x > 0 && !w.includes(x)) w.push(x); } return w; };
const nq = (text, val, expl, d = 0) => ({ q: text, c: val, w: pad(val, d), e: `${expl} The answer is ${val}.` });
const tq = (text, c, w, expl) => ({ q: text, c, w, e: expl });
const rq = (a, b, expl, text) => { const r = ratio(a, b); const w = [ratio(b, a), ratio(a + 1, b), ratio(a, b + 2), '1 : 1', '2 : 3', '3 : 5'].filter((x, i, arr) => x !== r && arr.indexOf(x) === i).slice(0, 3); return { q: text, c: r, w, e: `${expl} The ratio is ${r}.` }; };
const pcq = (text, val, expl, d = 1) => ({ q: text, c: pct(val, d), w: near(round(val, d), d).map((x) => pct(x, d)), e: `${expl} The answer is ${pct(val, d)}.` });

// ================= Chapter 63: flow chart and network DI =================
const edges = [['F', 'W1', 120], ['F', 'W2', 180], ['F', 'W3', 100], ['W1', 'S1', 60], ['W1', 'S2', 40], ['W2', 'S2', 70], ['W2', 'S3', 60], ['W2', 'S4', 40], ['W3', 'S3', 30], ['W3', 'S4', 60]];
const flow = (a, b) => edges.find((e) => e[0] === a && e[1] === b)[2];
const inflow = (n) => sum(edges.filter((e) => e[1] === n).map((e) => e[2]));
const outflow = (n) => sum(edges.filter((e) => e[0] === n).map((e) => e[2]));
const loss = (w) => inflow(w) - outflow(w);
const prod = outflow('F');
const stores = ['S1', 'S2', 'S3', 'S4'], whs = ['W1', 'W2', 'W3'];
const received = sum(stores.map(inflow));
const FT = 'A factory F supplies three warehouses W1, W2 and W3 (units shipped on each route). The warehouses supply four stores S1 to S4. Units not shipped onward from a warehouse are lost (damaged or expired).\n\n' + table('Flow data (units shipped)', ['From', 'To', 'Units'], edges.map((e) => [e[0], e[1], e[2]]));
// road network for shortest-path questions
const roads = [['A', 'B', 4], ['A', 'C', 2], ['B', 'C', 1], ['B', 'D', 5], ['C', 'D', 8], ['C', 'E', 10], ['D', 'E', 2], ['D', 'F', 6], ['E', 'F', 3]];
const adj = {};
for (const [a, b, d] of roads) { (adj[a] = adj[a] || []).push([b, d]); (adj[b] = adj[b] || []).push([a, d]); }
function paths(from, to, seen = [from], dist = 0, out = []) {
  if (from === to) { out.push({ p: seen.slice(), d: dist }); return out; }
  for (const [n, d] of adj[from]) if (!seen.includes(n)) { seen.push(n); paths(n, to, seen, dist + d, out); seen.pop(); }
  return out;
}
const shortest = (a, b) => paths(a, b).sort((x, y) => x.d - y.d)[0];
const NT = 'The road network below joins six towns A to F. The distances (in km) of the direct roads are given.\n\n' + table('Road data (distance in km)', ['Town 1', 'Town 2', 'Distance'], roads.map((r) => [r[0], r[1], r[2]]));
const sAF = shortest('A', 'F');
const nPaths = paths('A', 'F').length;
const routeLen = (list) => list.slice(1).reduce((acc, n, i) => acc + adj[list[i]].find((x) => x[0] === n)[1], 0);

const ch63 = C({
  n: 63, id: 'y3-di-flow-chart-di', cat: 'di', title: 'Flow Chart and Network DI',
  tag: 'Quantities moving through stages or links: flows, losses, shortest routes and route counts',
  over: 'A flow chart shows how a quantity (units, money, people) moves from a source through stages to destinations, with numbers on the arrows. A network shows places joined by links with distances or costs. The questions ask for totals into and out of a node, losses where outflow is less than inflow, shares of a flow, and in a network, shortest routes and the number of routes. The key rule is conservation: what goes in either comes out or is lost.',
  place: 'Flow charts and network diagrams appear in DI sets as a visual variant of table problems.',
  real: 'Supply chains, call routing and delivery networks are all flow charts or networks.',
  obj: ['Compute inflow and outflow at a node', 'Find losses by conservation', 'Compute shares of a flow', 'Find shortest routes in a small network', 'Count the possible routes'],
  pre: ['Table-Based DI', 'Percentage-Based DI'],
  refresh: 'Inflow − outflow = loss (or stock kept). A route length is the sum of the distances of its roads.',
  defs: ['Node: a point where flows meet (factory, warehouse, store, town).', 'Inflow: total arriving at a node.', 'Outflow: total leaving a node.', 'Loss: inflow minus outflow when some units do not move on.', 'Route: a path from one node to another that visits no node twice.'],
  intu: 'Treat each node as a bucket: what pours in either pours out or stays. Add the arrows into and out of each node.',
  mental: 'Make a small table of nodes with inflow, outflow and loss. For networks, list the routes from the start and add their distances.',
  formulas: [['Loss', 'Inflow − outflow', 'Each warehouse.', 'Conservation.', 'W1: 120 − 100 = 20'], ['Share of flow', 'Part ÷ node outflow × 100', 'One arrow.', 'Percent.', 'W2 to S2: 70/170'], ['Total loss', 'Sum of node losses', 'Whole chart.', 'Aggregate.', '20 + 10 + 10'], ['Route length', 'Sum of road distances', 'Any route.', 'Networks.', 'A–C–B–D–E–F = 13'], ['Shortest route', 'Compare all routes', 'Small networks.', 'Minimum.', 'List and add']],
  narr: ['In the supply chain, the factory ships 120 + 180 + 100 = 400 units. W1 receives 120 and ships out 60 + 40 = 100, so 20 units are lost. W2 receives 180 and ships 70 + 60 + 40 = 170 (loss 10). W3 receives 100 and ships 30 + 60 = 90 (loss 10). The total loss is 40 units and the stores receive 360.', 'The share of an arrow is measured against the node\'s outflow (or inflow, if the question says so): W2 sends 70 of its 170 units to S2, which is about 41.2%.', 'For stores, add all arrows into them: S1 60, S2 40 + 70 = 110, S3 60 + 30 = 90, S4 40 + 60 = 100.', 'In the road network, list routes and add distances. The route A–C–B–D–E–F is 2 + 1 + 5 + 2 + 3 = 13 km, the shortest from A to F. A longer route is A–B–D–F = 4 + 5 + 6 = 15 km.', 'To count routes, extend each path step by step without visiting a town twice, and count the paths that end at the target.'],
  deep: [['Conservation check', 'If inflow ≠ outflow and no loss is stated, you have misread an arrow.'], ['Shortest route', 'The shortest route need not use the fewest roads; it uses the smallest total distance.']],
  vars: [['Inflow and outflow', 'Sum arrows.', 'Warehouse W2'], ['Losses', 'Difference.', 'Total loss'], ['Shares', 'Percent of flow.', 'W2 to S2'], ['Shortest route', 'Add distances.', 'A to F'], ['Counting routes', 'List paths.', 'A to F']],
  ex: [
    { t: 'Loss at a node', q: 'Warehouse W1 receives 120 units and ships 60 units to S1 and 40 units to S2. How many units are lost?', g: ['120 in', '60 + 40 out'], c: 'Inflow − outflow.', s: [['Outflow', '60 + 40 = 100.'], ['Loss', '120 − 100 = 20.']], a: '20', w: 'Units not shipped are lost.', tr: 'Adding 120 and 100.' },
    { t: 'Share of a flow', q: 'W2 ships 70, 60 and 40 units to S2, S3 and S4. What percentage of its shipments goes to S2?', g: ['70 of 170'], c: 'Part ÷ total.', s: [['Total', '70 + 60 + 40 = 170.'], ['Percent', '70 ÷ 170 = 41.2%.']], a: '41.2%', w: 'The base is W2\'s outflow.', tr: 'Dividing by 180.' },
    { t: 'Route length', q: 'The road A–C is 2 km, C–B is 1 km, B–D is 5 km, D–E is 2 km and E–F is 3 km. What is the length of the route A–C–B–D–E–F?', g: ['Five roads'], c: 'Add distances.', s: [['Add', '2 + 1 = 3; 3 + 5 = 8.'], ['Finish', '8 + 2 + 3 = 13 km.']], a: '13 km', w: 'Use every road on the route.', tr: 'Skipping a road.' }
  ],
  short: { title: 'Node table', trad: 'Trace arrows each time.', fast: 'Compute inflow, outflow and loss for every node once; for networks list the routes and their lengths once.', rules: ['Loss = in − out.', 'Share uses the node total.', 'Add all arrows.', 'List routes systematically.'] },
  mist: [['Missing an arrow', 'Wrong total.', 'Tick each arrow as used.'], ['Wrong base for a share', 'Using total production.', 'Use the node total.'], ['Skipping a route', 'Miscount.', 'Branch systematically.']],
  tips: { sec: 100, elim: 'No node can send out more than it receives.', adv: 'Write inflow, outflow and loss beside each node.', ins: 'Counting routes is easier if you branch from the start in order.' },
  rev: ['Inflow/outflow.', 'Loss.', 'Share.', 'Route length.', 'Counting routes.'],
  qf: ['Loss = inflow − outflow'],
  take: ['Node table.', 'Conservation.', 'Right base.', 'List routes.'],
  self: ['Can I compute losses?', 'Can I compute a share of a flow?', 'Can I find the shortest route?']
});
const q63 = [
  E(nq(`${FT}How many units does the factory send to W2?`, flow('F', 'W2'), `The arrow F to W2 shows 180.`)),
  E(nq(`${FT}How many units does the factory produce and send in total?`, prod, `120 + 180 + 100 = 400.`)),
  E(nq(`${FT}How many units go from W1 to S2?`, flow('W1', 'S2'), `The arrow W1 to S2 shows 40.`)),
  E(nq(`${FT}How many units does S2 receive in total?`, inflow('S2'), `S2 receives 40 from W1 and 70 from W2: 110.`)),
  E(nq(`${FT}How many units does S1 receive in total?`, inflow('S1'), `Only W1 supplies S1: 60.`)),
  E(nq(`${FT}How many units are lost at W1?`, loss('W1'), `W1 receives 120 and ships 60 + 40 = 100, so 120 − 100 = 20 are lost.`)),
  M(nq(`${FT}What is the total number of units received by all four stores?`, received, `60 + 110 + 90 + 100 = 360.`)),
  M(nq(`${FT}What is the total number of units lost at the three warehouses?`, sum(whs.map(loss)), `Losses: W1 20, W2 10, W3 10; total 40.`)),
  M(pcq(`${FT}What percentage of the units produced is lost?`, 40 / 400 * 100, `Total loss = 40 out of 400 produced: 40 ÷ 400 = 10%.`, 1)),
  M(rq(inflow('S1'), inflow('S4'), `S1 receives 60 and S4 receives 100; the HCF is 20.`, `${FT}What is the ratio of units received by S1 to those received by S4?`)),
  M(tq(`${FT}Which warehouse ships out the largest number of units?`, 'W2', ['W1', 'W3', 'W1 and W3 equally'], `Outflows are W1 100, W2 170 and W3 90, so W2 ships the most. Answer: W2.`)),
  M(pcq(`${FT}What percentage of W2's shipments goes to S2 (to one decimal place)?`, 70 / 170 * 100, `W2 ships 170 in all; 70 of them go to S2: 70 ÷ 170 = ${round(70 / 170 * 100, 1)}%.`, 1)),
  M(tq(`${NT}What is the shortest distance from A to F (in km)?`, `${sAF.d} km`, [`${sAF.d + 2} km`, `${sAF.d - 2} km`, `${sAF.d + 5} km`], `Checking the routes, the shortest is ${sAF.p.join('–')} = ${sAF.d} km. Answer: ${sAF.d} km.`)),
  M(tq(`${NT}Which route from A to F is the shortest?`, sAF.p.join('–'), ['A–B–D–F', 'A–C–D–F', 'A–B–D–E–F'], `The route ${sAF.p.join('–')} totals ${sAF.d} km, which is shorter than A–B–D–F (15 km), A–C–D–F (16 km) and A–B–D–E–F (14 km). Answer: ${sAF.p.join('–')}.`)),
  P(nq(`${NT}What is the length of the route A–B–D–F (in km)?`, routeLen(['A', 'B', 'D', 'F']), `4 + 5 + 6 = 15.`)),
  P(nq(`${NT}By how many km is the route A–B–D–F longer than the shortest route from A to F?`, routeLen(['A', 'B', 'D', 'F']) - sAF.d, `15 − ${sAF.d} = ${routeLen(['A', 'B', 'D', 'F']) - sAF.d}.`)),
  P(nq(`${NT}How many different routes (without visiting any town twice) are there from A to F?`, nPaths, `Listing all routes from A and counting those that reach F gives ${nPaths}.`)),
  P(tq(`${NT}What is the shortest distance from A to E (in km)?`, `${shortest('A', 'E').d} km`, [`${shortest('A', 'E').d + 2} km`, `${shortest('A', 'E').d - 2} km`, `${shortest('A', 'E').d + 4} km`], `The shortest route to E is ${shortest('A', 'E').p.join('–')} = ${shortest('A', 'E').d} km. Answer: ${shortest('A', 'E').d} km.`)),
  P(nq(`${NT}A courier travels A–C–D–F. How long is this route (in km)?`, routeLen(['A', 'C', 'D', 'F']), `2 + 8 + 6 = 16.`)),
  P(nq(`${NT}How many routes from A to F pass through town E?`, paths('A', 'F').filter((r) => r.p.includes('E')).length, `Among the ${nPaths} routes from A to F, those that include E number ${paths('A', 'F').filter((r) => r.p.includes('E')).length}.`))
];
build(ch63, q63);

// ================= Chapter 64: data analysis and trend identification =================
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const sales = [120, 132, 128, 145, 160, 155, 170, 185, 180, 200, 215, 230];
const T64 = table('Monthly sales (₹ lakh) of a company in one year', ['Month', 'Sales (₹ lakh)'], months.map((m, i) => [m, sales[i]]));
const mv = (m) => sales[months.indexOf(m)];
const chg = sales.slice(1).map((s, i) => s - sales[i]);
const avgS = sum(sales) / 12;
const monthsOther = (c) => months.filter((m) => m !== c).slice(0, 3);
const bigRise = months[1 + chg.indexOf(Math.max(...chg))];
const above = months.filter((m, i) => sales[i] > avgS);
const quarters = [0, 1, 2, 3].map((q) => sum(sales.slice(q * 3, q * 3 + 3)));
const ch64 = C({
  n: 64, id: 'y3-di-data-analysis', cat: 'di', title: 'Data Analysis and Trend Identification',
  tag: 'Reading a time series: rises, falls, averages, moving averages, growth and simple forecasts',
  over: 'A trend is the general direction of a series over time. Data analysis questions ask you to find it and to describe it with numbers: the biggest rise or fall, how many periods were above average, the growth between two periods, a moving average that smooths short-term ups and downs, and a simple forecast that extends the average change. The skill is to compute the right summary and to describe what it says without over-reading.',
  place: 'Time-series and trend questions appear in DI sections to test analysis as well as arithmetic.',
  real: 'Reading monthly sales, website traffic or temperature records and deciding whether things are rising is everyday analysis.',
  obj: ['Compute period-to-period changes', 'Find the period of greatest rise or fall', 'Compute averages and compare periods with them', 'Use moving averages and quarterly totals', 'Make a simple forecast from average change'],
  pre: ['Line Graph Interpretation', 'Averages'],
  refresh: 'Change = later − earlier. Average = total ÷ number of periods. Growth % = change ÷ earlier × 100.',
  defs: ['Trend: the overall direction of a series.', 'Period-to-period change: difference between consecutive values.', 'Moving average: average of a fixed number of consecutive periods.', 'Seasonality: a repeated pattern within a year.', 'Forecast: a projection based on past change.'],
  intu: 'A trend is the story of the series in one sentence. Compute differences to find the story and averages to summarise it.',
  mental: 'List the changes between consecutive periods. Mark positive and negative ones. The largest and the sign pattern describe the trend.',
  formulas: [['Change', 'Later − earlier', 'Consecutive.', 'Rise/fall.', 'Mar to Apr: +17'], ['Average', 'Total ÷ n', '12 months.', 'Summary.', '2,020 ÷ 12'], ['Moving average', 'Mean of 3 consecutive values', 'Smoothing.', 'Trend.', 'Jan–Mar: 126.7'], ['Growth', 'Change ÷ earlier × 100', 'Two periods.', 'Percent.', 'Jan to Dec: 91.7%'], ['Forecast', 'Last value + average change', 'Steady trend.', 'Projection.', '230 + 10']],
  narr: ['Changes between consecutive months (February to December): +12, −4, +17, +15, −5, +15, +15, −5, +20, +15, +15. The largest rise is +20 in October (from 180 in September to 200).', 'The series dips in March, June and September but rises overall: from 120 in January to 230 in December. The overall growth is (230 − 120) ÷ 120 = 91.7%.', 'The yearly total is 2,020 and the monthly average is 168.3. Sales were above average in July (170) and in every later month, and below it in all earlier months, so six months were above average.', 'Quarterly totals smooth monthly noise: 380, 460, 535, 645. Sales rise in every quarter.', 'A simple forecast uses the average monthly change: (230 − 120) ÷ 11 = 10. If it continues, the next month would be 240.'],
  deep: [['Moving average', 'A three-month moving average removes dips; it makes the upward trend clearer.'], ['Forecast limits', 'A forecast assumes the past pattern continues; it is an estimate, not a fact.']],
  vars: [['Largest rise', 'Max change.', 'October'], ['Months above average', 'Compare with mean.', 'Count'], ['Moving average', 'Smooth.', 'Three-month'], ['Quarter totals', 'Sum in blocks.', 'Q4 highest'], ['Forecast', 'Average change.', 'Next month']],
  ex: [
    { t: 'Largest rise', q: 'Sales were 180 in September and 200 in October; 160 in May and 155 in June. Which month-to-month change is larger?', g: ['Two changes'], c: 'Compute each change.', s: [['Sep to Oct', '200 − 180 = +20.'], ['May to Jun', '155 − 160 = −5.']], a: 'September to October (+20)', w: 'One is a rise, the other a fall.', tr: 'Ignoring the sign.' },
    { t: 'Moving average', q: 'Sales for January, February and March are 120, 132 and 128. What is their three-month average?', g: ['Three values'], c: 'Add and divide.', s: [['Sum', '120 + 132 + 128 = 380.'], ['Average', '380 ÷ 3 = 126.7.']], a: '126.7', w: 'Divide by 3.', tr: 'Dividing by 2.' },
    { t: 'Forecast', q: 'Sales rose from 120 (January) to 230 (December), 11 steps. What is the average monthly change?', g: ['11 steps'], c: 'Total change over steps.', s: [['Total change', '230 − 120 = 110.'], ['Per step', '110 ÷ 11 = 10.']], a: '10', w: 'There are 11 steps between 12 months.', tr: 'Dividing by 12.' }
  ],
  short: { title: 'Differences first', trad: 'Scan the numbers.', fast: 'Write the list of month-to-month changes once; the biggest rise, the dips and the average change all come from that list.', rules: ['n values have n − 1 changes.', 'Sign matters.', 'Compare with the mean.', 'Forecast with average change.'] },
  mist: [['Dividing by 12 for the average change', '12 months have 11 changes.', 'Divide by n − 1.'], ['Ignoring signs', 'A fall is not a rise.', 'Keep + and −.'], ['Treating a forecast as certain', 'It is an estimate.', 'State the assumption.']],
  tips: { sec: 90, elim: 'The average must lie between the minimum and maximum.', adv: 'Compute changes in one pass.', ins: 'Describe the trend in a sentence before computing anything.' },
  rev: ['Changes.', 'Average.', 'Moving average.', 'Quarter totals.', 'Forecast.'],
  qf: ['Average change = total change ÷ (n − 1)'],
  take: ['List changes.', 'n − 1 steps.', 'Compare with the mean.', 'Forecast carefully.'],
  self: ['Can I find the biggest rise?', 'Can I count months above average?', 'Can I forecast simply?']
});
const q64 = [
  E(nq(`${T64}What were the sales in July (₹ lakh)?`, mv('Jul'), `The table shows 170 for July.`)),
  E(tq(`${T64}In which month were the sales the highest?`, 'Dec', monthsOther('Dec'), `The highest value is 230 in December. Answer: Dec.`)),
  E(tq(`${T64}In which month were the sales the lowest?`, 'Jan', monthsOther('Jan'), `The lowest value is 120 in January. Answer: Jan.`)),
  E(nq(`${T64}What were the total sales for the year (₹ lakh)?`, sum(sales), `120 + 132 + 128 + 145 + 160 + 155 + 170 + 185 + 180 + 200 + 215 + 230 = 2,020.`)),
  E(nq(`${T64}By how much did sales increase from January to December (₹ lakh)?`, 110, `230 − 120 = 110.`)),
  E(nq(`${T64}By how much did sales fall from May to June (₹ lakh)?`, 5, `160 − 155 = 5.`)),
  M(nq(`${T64}What was the average monthly sales (₹ lakh, to one decimal)?`, round(avgS, 1), `Total 2,020 ÷ 12 = ${round(avgS, 1)}.`, 1)),
  M(tq(`${T64}In which month was the increase over the previous month the largest?`, bigRise, monthsOther(bigRise), `Month-to-month changes are +12, −4, +17, +15, −5, +15, +15, −5, +20, +15, +15 (from Feb to Dec); the largest is +20 in ${bigRise}. Answer: ${bigRise}.`)),
  M(nq(`${T64}In how many months were sales lower than in the previous month?`, chg.filter((c) => c < 0).length, `Falls occurred in March (−4), June (−5) and September (−5): 3 months.`)),
  M(nq(`${T64}In how many months were sales above the yearly average?`, above.length, `The average is 168.3. Months above it: ${above.join(', ')}.`)),
  M(pcq(`${T64}By what percentage did sales grow from January to December?`, 110 / 120 * 100, `110 ÷ 120 × 100 = 91.7%.`, 1)),
  M(nq(`${T64}What were the total sales in the third quarter (July to September, ₹ lakh)?`, quarters[2], `170 + 185 + 180 = 535.`)),
  M(tq(`${T64}Which quarter had the highest total sales?`, 'October to December', ['July to September', 'April to June', 'January to March'], `Quarter totals are ${quarters.join(', ')}; the highest is October to December. Answer: October to December.`)),
  M(nq(`${T64}What is the three-month moving average for October, November and December (₹ lakh)?`, round((200 + 215 + 230) / 3, 1), `(200 + 215 + 230) ÷ 3 = 645 ÷ 3 = ${round(645 / 3, 1)}.`, 1)),
  P(nq(`${T64}What is the average monthly change in sales between January and December (₹ lakh)?`, 10, `Total change 110 over 11 monthly steps: 110 ÷ 11 = 10.`)),
  P(nq(`${T64}If the trend of the average monthly change continues, what would be the expected sales in the next January (₹ lakh)?`, 240, `Last value 230 plus the average change 10 = 240.`)),
  P(tq(`${T64}Which statement best describes the trend of sales?`, 'Rising overall with small dips in some months', ['Steadily falling', 'Constant throughout the year', 'Rising every single month'], `Sales go from 120 to 230, with small falls in March, June and September, so the trend is upward with dips. Answer: rising overall with small dips.`)),
  P(pcq(`${T64}By what percentage did sales in the fourth quarter exceed those in the first quarter?`, (quarters[3] - quarters[0]) / quarters[0] * 100, `Quarter 4 total = ${quarters[3]}, quarter 1 total = ${quarters[0]}; difference ${quarters[3] - quarters[0]} ÷ ${quarters[0]} = ${round((quarters[3] - quarters[0]) / quarters[0] * 100, 1)}%.`, 1)),
  P(nq(`${T64}What is the largest fall in sales between consecutive months (₹ lakh)?`, 5, `The falls are 4 (Mar), 5 (Jun) and 5 (Sep), so the largest fall is 5.`)),
  P(tq(`${T64}The sales in how many months were at least ₹200 lakh?`, '3', ['2', '4', '5'], `Months with sales ≥ 200: Oct (200), Nov (215), Dec (230) = 3. Answer: 3.`))
];
build(ch64, q64);
