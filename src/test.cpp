#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool canWin(int n, int m, int positions[]) {
    bool dp[n];
    memset(dp, false, sizeof(dp));

    // 标记锦鲤位置
    for (int i = 0; i < m; i++) {
        dp[positions[i]] = true;
    }

    // 逆向思考，从后往前推导
    for (int i = 0; i < n; i++) {
        if (dp[i]) {
            continue;
        }
        // 如果当前位置是0，检查能否通过取首或尾让对手处于不利位置
        bool canForceLose = true;
        if (i > 0 && dp[i - 1] == false) {
            canForceLose = false;
        }
        if (i < n - 1 && dp[i + 1] == false) {
            canForceLose = false;
        }
        dp[i] = !canForceLose;
    }

    return dp[0] || dp[n - 1];
}

int main() {
    int n, m;
    scanf("%d %d", &n, &m);

    int positions[m];
    for (int i = 0; i < m; i++) {
        scanf("%d", &positions[i]);
    }

    if (canWin(n, m, positions)) {
        printf("Goldye\n");
    } else {
        printf("Xiaozhu Hahaha\n");
    }

    return 0;
}
