//자연수 N과 M이 주어질 때, 1부터 N까지 자연수 중에서 M개를 고른 수열을 만들어보자

function dfs(N, M, ans) {
  if (ans.length == M) {
    console.log(ans);
    return;
  }
  for (let i = 1; i <= N; i++) {
    ans.push(i);
    dfs(N, M, ans);
    ans.pop();
  }
}
//1~4의 자연수 중에서 2개를 뽑아 수열을 만들어라
//ex: 11, 12, 13, 14 ~ 41, 42, 43, 44
let [N, M] = [4, 2];

dfs(N, M, []);
