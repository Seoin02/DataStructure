function bfs(graph, visit, start) {
  let queue = [];
  queue.push(start);

  //큐가 빌 때 까지
  while (queue.length) {
    let cur = queue.shift();
    //만약 방문했다면 continue
    if (visit[cur]) {
      continue;
    }

    //방문 표시
    visit[cur] = 1;
    console.log(cur);

    graph[cur].forEach((next) => queue.push(next));
  }
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
graph[1].push(5);
graph[1].push(6);
graph[1].push(7);
graph[1].push(8);
graph[1].push(9);
graph[1].push(10);
graph[1].push(11);
graph[1].push(12);
graph[1].push(13);

bfs(graph, visit, 1);
