// Code your solution in this file
function distanceFromHqInBlocks(dis) {
    let distance = 0;
    if (dis < 42)
        distance = 42 - dis;
    if (dis > 42)
        distance = dis - 42;
    return distance;
}

function distanceFromHqInFeet(dis) {
    let distance = 264 * distanceFromHqInBlocks(dis);
    return distance;
}

function distanceTravelledInFeet(start, end) {
    let distance = 0;

    if (start > end)
        distance = start - end;
    if (start < end)
        distance = end - start;

    return (distance * 264);
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end);

    if (distance <= 400)
        return 0;
    if (distance > 400 && distance <= 2000)
        return (((distance - 400) * 2) / 100);
    if (distance > 2000 && distance <= 2500)
        return 25;
    if (distance > 2500)
        return 'cannot travel that far'
}