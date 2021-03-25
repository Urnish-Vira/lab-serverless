exports.fibonacci = (req, res) => {

    let compute = req.body.compute;

    if (!Number.isInteger(req.body.compute)) {
        res.send('Wrong input data');
    }

    function fibonacci(num, memo) {
        memo = memo || {};

        if (memo[num]) return memo[num];
        if (num <= 1) return 1;

        return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
    }

    let fi = [];

    for (let a = 0; a < compute; a++) {
        fi[a] = fibonacci(a);
    }

    let sum = 0;

    for (let i = 0; i <= fi.length; i++) {
        if(fi[i] % 2) {
            sum = sum + fi[i];
        }
    }

    res.status(200).send({"result": sum});
};