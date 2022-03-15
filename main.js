function closestToZero(nbs) {
    if (nbs === undefined || nbs.length === 0) return 0

    let closest

    nbs.forEach(number => {
        if (closest === undefined)
            closest = number
        if (Math.abs(number) < Math.abs(closest) || (Math.abs(number) === Math.abs(closest) && number > closest))
            closest = number
    })

    return closest
}