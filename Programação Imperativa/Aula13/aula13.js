function Conta(num, tipo, saldo, titular) {
    this.numero = num
    this.tipo = tipo
    this.saldo = saldo
    this.titular = titular
  }
  
  let conta01 = new Conta(5486273622, 'Conta Corrente', 27771, 'Abigael Natte')
  let conta02 = new Conta(1183971869, 'Conta Poupança', 8675, 'Ramon Connell')
  let conta03 = new Conta(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente')
  let conta04 = new Conta(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley')
  let conta05 = new Conta(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer')
  let conta06 = new Conta(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus')
  let conta07 = new Conta(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour')
  let conta08 = new Conta(185979521, 'Conta Poupança', 25994, 'Lonnie Verheijden')
  let conta09 = new Conta(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan')
  let conta10 = new Conta(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett')
  
  var contas = [
    conta01,
    conta02,
    conta03,
    conta04,
    conta05,
    conta06,
    conta07,
    conta08,
    conta09,
    conta10
  ]
  
  let banco = {
    clientes: contas,
  
    consultarCliente: function (titular) {
      for (let i = 0; i < contas.length; i++) {
        if (contas[i].titular == titular) {
          return contas[i]
        }
      }
    },
    deposito: function (titular, valor) {
      let contaDepositar = this.consultarCliente(titular)
      contaDepositar.saldo += valor
      console.log(`Depósito realizado, seu novo saldo é: ${contaDepositar.saldo}`)
    },
    saque: function (titular, valor) {
      let contaSacar = this.consultarCliente(titular)
      if (contaSacar.saldo < valor) {
        console.log(`Fundos insuficientes`)
      } else {
        contaSacar.saldo -= valor
        console.log(
          `Extração feita com sucesso, seu novo saldo é: ${contaSacar.saldo}`
        )
      }
    }
  }
  
  // banco.deposito('Thomasin Latour', 50000)
  // banco.saque('Thomasin Latour', 50000)
  
  banco.consultarCliente('Thomasin Latour')
  
  //console.log(banco.clientes[2].saldo)
  
  // console.log(contas[2].tipo)