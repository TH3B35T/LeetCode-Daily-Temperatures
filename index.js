/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const stack = []; // to store indices
    const answer = new Array(n).fill(0); // Array.from({ length }, () => 0) but fill is faster
    for(let i = 0;i<= n; i++){
        while(stack.length != 0 && temperatures[i] > temperatures[stack[stack.length -1]]){
            let prev_index = stack.pop();
            answer[prev_index] = i - prev_index;
        }
        stack.push(i);
    }

    return answer;
};
