// src/pages/Gerenciador.tsx
import React, { useState } from 'react';

const Gerenciador: React.FC = () => {
  const [despesas, setDespesas] = useState<number[]>([]);
  const [valor, setValor] = useState<number>(0);
  const [descricao, setDescricao] = useState('');

  const handleAddExpense = () => {
    if (descricao && valor > 0) {
      setDespesas([...despesas, valor]);
      setDescricao('');
      setValor(0);
    }
  };

  const totalDespesas = despesas.reduce((acc, curr) => acc + curr, 0);
  const saldoRestante = 1000 - totalDespesas; // Exemplo: assumindo um orçamento inicial de 1000

  return (
    <div>
      <h2>Gerenciador de Orçamento</h2>
      <div>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição"
        />
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          placeholder="Valor"
        />
        <button onClick={handleAddExpense}>Adicionar Despesa</button>
      </div>
      <div>
        <h3>Total de Despesas: R$ {totalDespesas.toFixed(2)}</h3>
        <h3>Saldo Restante: R$ {saldoRestante.toFixed(2)}</h3>
      </div>
      <div>
        <h3>Lista de Despesas:</h3>
        <ul>
          {despesas.map((despesa, index) => (
            <li key={index}>R$ {despesa.toFixed(2)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gerenciador;
