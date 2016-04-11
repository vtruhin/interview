import { dfs } from '../depthFirstSearch';
import { Graph } from '../../../data-structures/ImmutableGraph';

const vertices = [
  { key: 'a', value: 1 },
  { key: 'b', value: 2 },
  { key: 'c', value: 3 },
  { key: 'd', value: 4 },
  { key: 'e', value: 5 },
];
const edges = [
  ['a', 'b'],
  ['a', 'c'],
  ['b', 'c'],
  ['c', 'a'],
  ['c', 'd'],
  ['e', 'e'],
];
const graph = Graph(vertices, edges);

describe('dfs', () => {
  it('should visit each vertex in a graph', () => {
    const fn = jest.genMockFunction();

    dfs(graph, (value, key) => fn(key));

    expect(fn.mock.calls).toEqual([
      ['a'], ['b'], ['c'], ['d'], ['e'],
    ]);
  });
});
