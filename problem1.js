


function buildFenceCommand( numOfFencePosts, fencePostMaterial){
    for( let numFenceSoFar = 0; numFenceSoFar < numOfFencePosts; numFenceSoFar++){
        console.log('JARVIS is now building ' + fencePostMaterial + ' fence post number ' + numFenceSoFar)
    }
    
}
let fencePostMaterial = 'wood'
buildFenceCommand(10, fencePostMaterial);
