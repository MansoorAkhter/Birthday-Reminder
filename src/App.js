import React, { useState } from "react";
import Data from "./data";
import List from "./List";
import "./App.css";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <main>
      <section className="container">
        <div className="person">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])} className="clearBtn">Clear All</button>
        </div>
      </section>
    </main>
  );
}

export default App;
