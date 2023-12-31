let matrizOperaciones = [[], [], [], []]
let matrizRectangulos = [[], [], [], []]
let operaciones = ['+', '-', '×', '÷', '√', '²']
let operacionesPresentadas = []
let filas, columnas
let repuestAnterrior1
let repuestAnterrior2
let repuestAnterrior3

export default class Basta_Matematico {
    constructor(escena, numFilas = 4, numColumnas = 5) {
        this.escena = escena
        filas = numFilas
        columnas = numColumnas
    }

    crearMatriz ({
        width = this.escena.game.canvas.width,
        height = this.escena.game.canvas.height
    } = {}) {
        const x = width * 0.13
        const y = height * 0.175

        for (let col = 0; col < columnas; col++) {
            let num = Math.floor(Math.random() * (10 * col - 10 * (col - 1) + 1)) + 10 * (col - 1)
            let operacion = operaciones[Math.floor(Math.random() * 6)]
            let texto = operacion == '√' ? '√x' : operacion == '²' ? 'x' + operacion : operacion + num
            let varX = x + width * 0.04 * (col * 4 + 1)

            matrizRectangulos[0].push(this.escena.add.rectangle(varX, y + height * 0.06, 200, 100, 0xBE4C33).setOrigin(0.5))
            if (col > 0) {
                operacionesPresentadas.push(operacion == '√' ? '√' : operacion == '²' ? operacion : operacion + num)

                matrizOperaciones[0].push(this.escena.add.text(varX, y + height * 0.06, texto, {
                    fontFamily: 'Arial',
                    fontSize: 34,
                    color: '#ffffff' // Color gris por defecto
                }))
                matrizOperaciones[0][col].setOrigin(0.5)
            } else {
                matrizOperaciones[0].push(this.escena.add.text(varX, y + height * 0.06, 'Número\nInicial', {
                    fontFamily: 'Arial',
                    fontSize: 30,
                    color: '#ffffff', // Color gris por defecto
                    align: 'center'
                }))
                matrizOperaciones[0][col].setOrigin(0.5)
            }
        }

        for (let fila = 1; fila < filas; fila++) {
            let varY = y + height * 0.06 * (fila * 3 + 1)

            let num = Math.floor(Math.random() * (33 * fila - 33 * (fila - 1) + 1)) + 33 * (fila - 1)

            matrizRectangulos[fila].push(this.escena.add.rectangle(x + width * 0.04, varY, 200, 100, 0xF1C0B5).setOrigin(0.5))
            matrizOperaciones[fila].push(this.escena.add.text(x + width * 0.04, varY, num, {
                fontFamily: 'Arial',
                fontSize: 34,
                color: '#2c2c2c' // Color gris por defecto
            }))
            matrizOperaciones[fila][0].setOrigin(0.5)

            for (let col = 1; col < columnas; col++) {
                let varX = x + width * 0.04 * (col * 4 + 1)

                matrizRectangulos[fila].push(this.escena.add.rectangle(varX, varY, 200, 100, 0xABA271).setOrigin(0.5))
                matrizOperaciones[fila].push(this.escena.add.text(varX, varY, '', {
                    fontFamily: 'Arial',
                    fontSize: 34,
                    color: '#ffffff' // Color gris por defecto
                }))
                matrizOperaciones[fila][col].setOrigin(0.5)

            }
        }

        return { matrizOperaciones, matrizRectangulos }
    }

    comprobarRespuesta (respuesta, fila, col) {
        const elevadorFloor = Math.pow(10, 2)
        let respAux
        switch(fila){
            case 1:
                    if (repuestAnterrior1) {
                        respAux = repuestAnterrior1
                    }else {
                        respAux = Number.parseInt(matrizOperaciones[fila][0].text);
                    }
                break
            case 2:
                    if (repuestAnterrior2) {
                        respAux = repuestAnterrior2
                    }else {
                        respAux = Number.parseInt(matrizOperaciones[fila][0].text);
                    }
                break

            case 3:
                    if (repuestAnterrior3) {
                        respAux = repuestAnterrior3
                    } else {
                        respAux = Number.parseInt(matrizOperaciones[fila][0].text);
                    }
                break
            default: respAux = Number.parseInt(matrizOperaciones[fila][0].text);
        }
        switch (operacionesPresentadas[col - 1][0]) {
            case '√':
                respAux = Math.floor(Math.sqrt(respAux) * elevadorFloor) / elevadorFloor
                console.log('√', respAux)
                break
            case '²':
                respAux = Math.floor(Math.pow(respAux, 2) * elevadorFloor) / elevadorFloor
                console.log('²', respAux)
                break
            case '÷':
                respAux = Math.floor((respAux / Number.parseInt(operacionesPresentadas[col - 1].slice(1))) * elevadorFloor) / elevadorFloor
                console.log('÷', respAux)
                break
            case '×':
                respAux = Math.floor((respAux * Number.parseInt(operacionesPresentadas[col - 1].slice(1))) * elevadorFloor) / elevadorFloor
                console.log('×', respAux)
                break
            case '+':
                respAux = Math.floor((respAux + Number.parseInt(operacionesPresentadas[col - 1].slice(1))) * elevadorFloor) / elevadorFloor
                console.log('+', respAux)
                break
            case '-':
                respAux = Math.floor((respAux - Number.parseInt(operacionesPresentadas[col - 1].slice(1))) * elevadorFloor) / elevadorFloor
                console.log('-', respAux)
                break
        }
        if (respAux == respuesta) {
            switch(fila){
                case 1:
                        repuestAnterrior1 = respAux
                    break
                case 2:
                        repuestAnterrior2 = respAux
                    break
    
                case 3:
                        repuestAnterrior3 = respAux
                    break
            }
            return true
        }else{
            return false
        }
    }
}