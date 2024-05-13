function dfs(graph, visit, cur) {
  if (visit[cur]) {
    return;
  }

  visit[cur] = 1;
  console.log(cur);
  graph[cur].forEach((next) => dfs(graph, visit, next));
}

let N = 12;
let M = 13;
let graph = Array.from({ length: M + 1 }, () => {
  return [];
});
let visit = Array.from({ length: M + 1 }, () => 0);

graph[1].push(2);
graph[1].push(3);
graph[1].push(4);
graph[3].push(5);
graph[3].push(6);
graph[5].push(7);
graph[5].push(8);
graph[6].push(9);
graph[9].push(10);
graph[9].push(11);
graph[10].push(12);
graph[10].push(13);

dfs(graph, visit, 1);
