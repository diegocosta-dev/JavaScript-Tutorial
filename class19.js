//max velocity 70km
// every 5km above max limit you receive one point in your car licence
// if points >= 12 you licence is Suspended

function verifyLimit(limit) {

    const MaxVelocity = 70
    const Points = Math.floor((limit - 70) /5)
    const Suspended = 12

    if (limit <= MaxVelocity)
        return `Ok`
        
    if (Math.floor(Points >= Suspended))
        return `You Licence is Suspended`

    return `Points: ${Points}`
}

console.log(verifyLimit(100))