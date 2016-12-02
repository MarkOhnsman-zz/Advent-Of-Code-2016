console.log("Advent of Code Day - 1")
var directions = ["R5", "R4", "R2", "L3", "R1", "R1", "L4", "L5", "R3", "L1", "L1", "R4", "L2", "R1", "R4", "R4", "L2", "L2", "R4", "L4", "R1", "R3", "L3", "L1", "L2", "R1", "R5", "L5", "L1", "L1", "R3", "R5", "L1", "R4", "L5", "R5", "R1", "L185", "R4", "L1", "R51", "R3", "L2", "R78", "R1", "L4", "R188", "R1", "L5", "R5", "R2", "R3", "L5", "R3", "R4", "L1", "R2", "R2", "L4", "L4", "L5", "R5", "R4", "L4", "R2", "L5", "R2", "L1", "L4", "R4", "L4", "R2", "L3", "L4", "R2", "L3", "R3", "R2", "L2", "L3", "R4", "R3", "R1", "L4", "L2", "L5", "R4", "R4", "L1", "R1", "L5", "L1", "R3", "R1", "L2", "R1", "R1", "R3", "L4", "L1", "L3", "R2", "R4", "R2", "L2", "R1", "L5", "R3", "L3", "R3", "L1", "R4", "L3", "L3", "R4", "L2", "L1", "L3", "R2", "R3", "L2", "L1", "R4", "L3", "L5", "L2", "L4", "R1", "L4", "L4", "R3", "R5", "L4", "L1", "L1", "R4", "L2", "R5", "R1", "R1", "R2", "R1", "R5", "L1", "L3", "L5", "R2"];


function followDirections(arr) {
    let coords = { x: 0, y: 0 }
    let facing = "N"
    let path = {}
    let bunnyHQ = 0;
    for (var i = 0; i < arr.length; i++) {
        var turn = arr[i][0];
        var distance = parseInt(arr[i].slice(1, arr.length))
        var traveled;
        facing = findFacing(facing, turn)
        switch (facing) {
            case 'N':
            case 'S':
                for (var index = 0; index < distance; index++) {
                    coords.x += travelValue(facing)
                    console.log("Walked past (" + coords.x + "," + coords.y + ")")
                    let tempKey = "X" + coords.x + "Y" + coords.y
                    if (!path[tempKey] && bunnyHQ === 0) {
                        path[tempKey] = tempKey
                    } else if (path[tempKey] && bunnyHQ === 0) {
                        bunnyHQ = {
                            x: coords.x,
                            y: coords.y
                        }
                    }
                }
                break;
            case 'E':
            case 'W':
                for (var index = 0; index < distance; index++) {
                    coords.y += travelValue(facing)
                    console.log("Walked past (" + coords.x + "," + coords.y + ")")
                    let tempKey = "X" + coords.x + "Y" + coords.y
                    if (!path[tempKey] && bunnyHQ === 0) {
                        path[tempKey] = tempKey
                    } else if (path[tempKey] && bunnyHQ === 0) {
                        bunnyHQ = {
                            x: coords.x,
                            y: coords.y
                        }
                    }
                }
                break;
        }
        console.log("Stopped at X:" + coords.x + " Y:" + coords.y)

    }
    let totalBlocks = Math.abs(coords.x) + Math.abs(coords.y)
    console.log("Total Blocks: " + totalBlocks)
    let distanceFromBunnyHQ = Math.abs(bunnyHQ.x) + Math.abs(bunnyHQ.y)
    console.log("BunnyHQ is at (" + bunnyHQ.x + "," + bunnyHQ.y + "), Thats only " + distanceFromBunnyHQ + " blocks away!")
}

function findFacing(facing, turn) {
    let newDirection;
    if (turn == 'R') {
        switch (facing) {
            case 'N':
                newDirection = 'E'
                break;
            case 'E':
                newDirection = 'S'
                break;
            case 'S':
                newDirection = 'W'
                break;
            case 'W':
                newDirection = 'N'
                break;
        }
    } else {
        switch (facing) {
            case 'N':
                newDirection = 'W'
                break;
            case 'W':
                newDirection = 'S'
                break;
            case 'S':
                newDirection = 'E'
                break;
            case 'E':
                newDirection = 'N'
                break;
        }
    }
    return newDirection;
}

function travelValue(facing) {
    if (facing == 'N' || facing == 'E') {
        return 1
    }
    return -1
}


followDirections(directions)