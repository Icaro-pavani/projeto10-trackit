export default function calculatePorcentageDone(array){
    const done = array.filter(habit => habit.done === true);
    return (done.length/array.length * 100).toFixed(0);
}