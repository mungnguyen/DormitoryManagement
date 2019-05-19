var x = [
    {a:"1" }, 
    {b:"2" }
]

x.forEach(e => {
    e = Object.assign(e, {c:"3"})
})

console.log(x);