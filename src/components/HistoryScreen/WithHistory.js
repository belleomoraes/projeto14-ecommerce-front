export default function WithHistory({ history }) {
  
  return (
    <>
      <div>
        <span>
          <h1>Data da compra</h1>
          <h1>Total (R$)</h1>
        </span>
        {history.map((hist) => (
          <span>
            <h2>{hist.date}</h2>
            <h2>{hist.value}</h2>
          </span>
        ))}
      </div>
    </>
  );
}
