

function directTurretDefenceCommand ( numOfTurrets, numOfDetectedZombies){
    while( numOfDetectedZombies > 0){
        console.log("directing " + numOfTurrets + "turrets fire to zombie #:" + numOfDetectedZombies)
        numOfDetectedZombies--
    }
}

directTurretDefenceCommand(15, 10);