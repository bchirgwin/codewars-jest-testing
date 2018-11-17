

function score( dice ) {


    const totalFace = (face) => {
        let score = 0;
        let threes = 0;
        const totalCount = dice.filter((die) => die === face).length;
        if (face === 1) {
            score = 100
            threes = 700
        } else if (face === 5) {
            score = 50
            threes = 350
        }
        return totalCount * score + (totalCount === 3 ? threes: 0);

    }


    return totalFace(1) + totalFace(5);
}

module.exports = score;

