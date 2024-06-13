/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a,b) => a-b);
    students.sort((a,b) => a-b);
    let res = 0;
    for(let i in seats){
        res += Math.abs(seats[i] - students[i]);
    }
    return res;
};