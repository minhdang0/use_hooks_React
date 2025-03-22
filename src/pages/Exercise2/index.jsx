import useLocalStorage from "../../hooks/useLocalStorage";

function Exercise2() {
  const [name, setName] = useLocalStorage("name", "F8 User");
  const [age, setAge] = useLocalStorage("age", 22);
  const [address, setAddress] = useLocalStorage("address", "Ha Nam");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Xin chào, {name}!</p>
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <p>Minh {age} tuoi</p>
      <input value={address} onChange={(e) => setAddress(e.target.value)} />
      <p>Minh den tu {address}</p>
    </div>
  );
}

export default Exercise2;
