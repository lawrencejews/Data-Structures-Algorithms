const coins = [5, 10, 25];
const makeChange = (coins, amount) => {
    coins.sort((a, b) => b - a);
    let coinTotal = 0;
    let i = 0;

    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i];
            coinTotal++;
        } else {
            i++
        }
        return coinTotal;
    }
};
console.log(makeChange()); // prune to fail