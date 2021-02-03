let a = [1, 2, 3]
let b = [6, 5, 5]

var c = 0;
for (let index = 0; index < a.length; index++) {
    c = c + a[index] + b[index]
}

type inmutableNumbers = readonly number[]
type inmutalbePairs = readonly [number, number][]

let zip = (a: inmutableNumbers) => (b: inmutableNumbers) => {
    function loop(result: inmutalbePairs = [], i: number = 0) : inmutalbePairs {
        if((a.length - 1) == i || (b.length - 1) == i )
            return result
        else
            return loop(result.concat([a[i], b[i]]), i++)
    }
    return loop()
}

let multiplyPairs = (a: inmutalbePairs) => a.map(t => t[0] * t[1])

let sum = (a: inmutableNumbers) => a.reduce((a , b) => a + b, 0)

let innerP = (a: number[]) => (b: number[]) => sum(multiplyPairs(zip(a)(b)))