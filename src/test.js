const glpkModule = require('glpk.js');

glpkModule().then(glpk => {
    // 定义目标函数系数
    const c = [-240, -240, -80, -80, -80, -80, -80, -80];

    // 定义约束矩阵
    const a = [
        [1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1]
    ];

    // 定义约束右侧值
    const b = [4, 5, 6, 6, 5, 6, 8, 8];

    // 使用 GLPK 求解
    const lp = {
        name: 'test_big_m_case17',
        objective: {
            direction: glpk.GLP_MIN,
            name: 'obj',
            vars: c.map((coef, index) => ({ name: `x${index + 1}`, coef }))
        },
        subjectTo: a.map((row, rowIndex) => ({
            name: `c${rowIndex + 1}`,
            vars: row.map((coef, colIndex) => ({ name: `x${colIndex + 1}`, coef })),
            bnds: { type: glpk.GLP_LO, ub: 0, lb: b[rowIndex] }
        }))
    };

    glpk.simplex(lp, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Optimal solution:', result.result.status);
            console.log('Objective value:', result.result.z);
            console.log('Variable values:', result.result.vars);
        }
    });
}).catch(error => {
    console.error('Error loading glpk.js:', error);
});


res_x = [0, 0, 4, 1, 5, 0, 0, 8], res_val = -1440