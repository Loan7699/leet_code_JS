let jump = function(array) {

        let end = 0;
        let jumps = 0;
        let farthest = 0;
        for (let i = 0; i < array.length - 1; i++) {
            // console.log(i);
            // console.log(farthest);
            // console.log(i + array[i]);
            farthest = Math.max(farthest, i + array[i]);
            // console.log(farthest);
            if (i == end) {
                jumps++;
                end = farthest;
                // console.log(end);
            }
        }
        return jumps;
}

console.log(jump([2,3,1,1,4]));