const microondas = (prato, tempoUsuario) => {
    prato === 'Pipoca'
        ? tempoDePreparo = 10
        : prato === 'Macarrão'
        ? tempoDePreparo = 8
        : prato === 'Carne'
        ? tempoDePreparo = 15
        : prato === 'Feijão'
        ? tempoDePreparo = 12
        : prato === 'Brigadeiro'
        ? tempoDePreparo = 8
        : 'Prato inexistente'

    const preparo = (tempoDePreparo) =>
        tempoUsuario >= tempoDePreparo * 3
        ? 'KABUMM!'
        : tempoUsuario > tempoDePreparo * 2
        ? 'A comida queimou'
        : tempoUsuario >= tempoDePreparo
        ? 'Prato pronto, bom apetite'
        : tempoUsuario < tempoDePreparo
        ? 'Tempo insuficiente'
        : ''

    console.log(preparo(tempoDePreparo))
}

microondas('Pipoca', 35)
microondas('Pipoca', 30)
microondas('Pipoca', 25)
microondas('Pipoca', 20)
microondas('Pipoca', 15)
microondas('Pipoca', 10)
microondas('Pipoca', 5)