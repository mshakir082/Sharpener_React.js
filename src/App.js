import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    { id:'1',title: "Car Insurance", amount: 294.5, date: new Date(2021, 2, 28) },
    { id:'2',title: "bike Insurance", amount: 894.5, date: new Date(2021, 2, 28) },
    {id:'3', title: "bycycle Insurance", amount: 594.5, date: new Date(2021, 2, 28) },
    { id:'4',title: "houses Insurance", amount: 494.5, date: new Date(2021, 2, 28) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((el)=>(<ExpenseItem id={el.id} title={el.title} amount={el.amount} date={el.date}/>))}
      
    </div>
  );
}

export default App;
