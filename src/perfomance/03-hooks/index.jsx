import { useCallback, useState } from "react";
import List from "./List";
import { data } from "../../data";
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  const removePerson = useCallback((id) => {
    const newPerson = people.filter((p) => p.id !== id);
    setPeople(newPerson);
  }, [people]);

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
