import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  font-size: 16px;
  width: 100%;
`;
const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;
const ExpenseBox = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;
  background:#fff;
  border-radius:17px;
  
  & span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;
const BalanceBox = styled.div`
  text-align:center;
  flex-direction:column;
  width: 100%;
  font-size:30px;
  font-weight:bold;
  font-family: 'Inter', sans-serif;
  border-radius:20px;
  background:#fff;

  & span {
    color: #0d1d2c;
    opacity: 80%;
    font-weight: bold;
    font-size: 18px;
  }
`;
const AddTransaction = styled.div`
 margin-top:4%;
  font-size: 15px;
  background: #0d1d2c;
  display: flex;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  flex-direction: row;
  border-radius: 4px;
  font-weight: bold;
`;
const AddTransactionContainer = styled.div`
  font-size: 15px;
  display: ${(props) => (props.isAddTxnVisible ? "flex" : "none")};
  color: #0d1d2c;
  flex-direction: column;
  border-radius: 14px;
  background:#BCC5CE;
  width: 100%;
  align-items: center;
  padding: 15px 20px;
  margin: 10px 20px;
  gap: 10px;
  & input {
    width: 90%;
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;
const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 10px 0;
  & input {
    width: unset;
    margin: 0 10px;
  }
`;
const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  return (
    <AddTransactionContainer isAddTxnVisible={props.isAddTxnVisible}>
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        placeholder="Price"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="Expense">Income</label>
      </RadioBox>

      <AddTransaction
        onClick={() =>
          props.addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc,
            type,
          })
        }
      >
        Add Transaction
      </AddTransaction>
    </AddTransactionContainer>
  );
};
const OverViewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTXn] = useState(false);
  return (
    <Container>
      <BalanceBox>
        <span>Account Balance:</span>
           <br />
           <b>${props.income - props.expense}</b>
      </BalanceBox>
      
      <AddTransaction onClick={() => toggleAddTXn((isVisible) => !isVisible)}>
          {isAddTxnVisible ? "CANCEL" : "ADD+"}
        </AddTransaction>
      {isAddTxnVisible && (
        <AddTransactionView
          isAddTxnVisible={isAddTxnVisible}
          addTransaction={(payload) => {
            props.addTransaction(payload);
            toggleAddTXn((isVisible) => !isVisible);
          }}
        />
      )}
      <ExpenseContainer>
        <ExpenseBox>
          Expense<span>${props.expense}</span>
        </ExpenseBox> 
        <ExpenseBox isIncome={true}>
          Income<span>${props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};
export default OverViewComponent;
