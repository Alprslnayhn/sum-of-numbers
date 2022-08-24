  const sum = (number) => {
    const items = [...(number +'')]
    const result = items.reduce((total,item) => {
     return total + Number(item)
}, 0)
    return result % 2 === 0 ? 'Even' : 'Odd'  
}

console.log(sum(22))


