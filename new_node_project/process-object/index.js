const initialMemoryUsage = process.memoryUsage()['heapUsed']; 
const yourName = process.argv[2];
const environtment = process.env.NODE_ENV;

for (let i = 0 ; i <= 10000; i++) {
    // looping to increase memory usage
}

const currentMemoryUsage = process.memoryUsage()['heapUsed'];

console.log(`Hai, ${yourName}`);
console.log(`Mode environtment: ${environtment}`);
console.log(`Pengunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);