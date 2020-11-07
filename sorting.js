let numbers = [4, 9, 7, 5, 8, 9, 3]

function sorting(numbers) {
    let length = numbers.length
    let swap = []
    let iteration = 0
    let temp
    for (let i = 0; i < iteration + 1; i++) {
        for (let j = 0; j < length; j++) {
            if (numbers[j] > numbers[j + 1]) {
                iteration++
                temp = numbers[j + 1]
                numbers[j + 1] = numbers[j]
                numbers[j] = temp
                swap = [numbers[j], numbers[j + 1]]
                console.log(`[${swap}] -> ${numbers}`);
                break
            }
        }
    }
    console.log(`Jumlah swap = ${iteration}`);
}
sorting(numbers)
// let result = sorting(numbers)
// console.log(`${result}`);

// 4, 9, 7, 5, 8, 9, 3
// 1. [7,9] -> 4 7 9 5 8 9 3    
// 2. [5,9] -> 4 7 5 9 8 9 3    
// 3. [5,7] -> 4 5 7 9 8 9 3
// 4. [8,9] -> 4 5 7 8 9 9 3
// 5. [3,9] -> 4 5 7 8 9 3 9
// 6. [3,9] -> 4 5 7 8 3 9 9
// 7. [3,8] -> 4 5 7 3 8 9 9
// 8. [3,7] -> 4 5 3 7 8 9 9 
// 9. [3,5] -> 4 3 5 7 8 9 9
// 10. [3,4] -> 3 4 5 7 8 9 9 

// Jumlah swap: 10

// let numbers = [4, 9, 7, 5, 8, 9, 3]

// function sorting(numbers) {
//     let length = numbers.length
//     let pair = []
//     let iteration = 0
//     let temp
//     let validate = true
//     while (validate) {
//         for (let j = 0; j < length; j++) {
//             if (numbers[j] > numbers[j + 1]) {
//                 temp = numbers[j + 1]
//                 numbers[j + 1] = numbers[j]
//                 numbers[j] = temp
//                 pair = [numbers[j], numbers[j + 1]]
//                 console.log(`[${pair}] -> ${numbers}`)
//                 iteration++
//                 break
//             }
//         }
//         console.log(`Jumlah swap = ${iteration}`)
//         validate = false
//     }
// }
// sorting(numbers)