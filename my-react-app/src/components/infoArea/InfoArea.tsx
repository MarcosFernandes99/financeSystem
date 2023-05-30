import { useEffect, useState } from "react"
import { DadosType } from "../../types/dados.interface"
import { Balance } from "../../types/dados.interface"

interface balanceProps {
  dados: DadosType[]
}

export const InfoArea = ({ dados }: balanceProps) => {
  const [balance, setBalance] = useState<Balance>({
    entrada: 0,
    saida: 0,
    saldo: 0
  })

  const getBalance = () => {
    let entradaTotal = 0
    let saidaTotal = 0

    let entrada = dados.filter((item) => item.categoria === "Entrada")
    let saida = dados.filter((item) => item.categoria === "Saída")

    entrada.forEach(element => {
      entradaTotal += parseInt(element.valor)
    });

    saida.forEach(element => {
      saidaTotal += parseInt(element.valor)
    });

    const saldoTotal = entradaTotal - saidaTotal

    setBalance({
      entrada: entradaTotal,
      saida: saidaTotal,
      saldo: saldoTotal
    })
  }


  useEffect(() => {
    getBalance()
  }, [dados])

  return (
    <div>
      <span>Receita: {balance.entrada}</span>
      <span>Despesa: {balance.saida}</span>
      <span>Balanço: {balance.saldo}</span>
    </div>
  )
}
