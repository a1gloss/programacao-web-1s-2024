function transporMatriz(A){
    let matrizString = '';
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[i].length; j++){
            matrizString = matrizString + A[i][j] + ' ';
        }
        matrizString += '\n';
    }
    console.log(matrizString);

    let matrizTranspostaString = '';
    for(let j = 0; j <A[0].length; j++){
        for(let i = 0; i < A.length; i++){
            matrizTranspostaString += A[i][j] + ' ';
        }
        matrizTranspostaString += '\n';
    }
    console.log(matrizTranspostaString);
}

module.exports = {
    transporMatriz
}