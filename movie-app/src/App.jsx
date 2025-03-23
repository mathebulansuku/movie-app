import "./App.css";

function App() {
  return (
    <>
      <Text display="Hello" />
      <Text display="How are you?" />
    </>
  );
}

function Text({ display }) {
  return <p>{display}</p>;
}
export default App;
