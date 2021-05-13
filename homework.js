/* 
1.  1,3,5,7,9 순서대로 
2.  1,3,5,7,9 역순
3,  5,4,3,2,1 역순인데 왼쪽 공백
4.  1,2,3,4,5 순서대로인데 왼 공
5.  1,3,5,3,1 마름모꼴 양쪽 공백
6.  1,3,5,7,9 크리스마스 트리
*/

for (let i = 0; i < 9; i += 2) { // 1번 complete
    console.log('*'.repeat(i+1));
}

for (let i = 0; i < 9; i += 2) {
    console.log('*'.repeat(9 - i)); // 2번도 
}

for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(i) + '*'.repeat(5 - i)); // 3번도
}

for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(4 - i) + '*'.repeat(i + 1)); // 4번두
}

/*
for (let i = 0; i < 5; i++) {
    console.log(' '.repeat() + '*'.repeat(5 - 2i))
}
*/

for (let i = 0; i <= 4; i++) {
    console.log(' '.repeat(4 - i) + '*'.repeat(2*i + 1) + ' '.repeat(4 - i));
}

// ' '*4 '*' ' '*4
// ' '*3 '*'*3 ' '*3
// ' '*2 '*'*5
// ' '*1 '*'7
// ' '*0 '*'9

// 2 1 2  2 - 0  1 + 0
// 1 3 1  2 - 1  1 + 2
// 0 5 0  2 - 2  1 + 4
// 1 3 1  2 - 3  1 + 2
// 2 1 2  2 - 4