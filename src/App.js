import "./App.css";
import { useEffect } from "react";
import config from "./aws-exports";

import { createFNotes } from "./graphql/mutations";
import { API } from "aws-amplify";
import { listFNotes } from "./graphql/queries";
import { onCreateFNotes } from "./graphql/subscriptions";

function App() {
  // query
  useEffect(() => {
    const pullData = async () => {
      const data = await API.graphql({ query: listFNotes });
      console.log(data);
    };
    pullData();

    // subscription
    const subscription = API.graphql({ query: onCreateFNotes }).subscribe({
      next: fNoteData => {
        console.log(fNoteData);
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  //mutation
  const createNewFNotes = async () => {
    const name = prompt("please give title to your field notes");
    const newNotes = await API.graphql({
      query: createFNotes,
      variables: { input: { name } },
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Demonstration of mutation ~</p>
        <div>
          <button onClick={createNewFNotes}>~click meeee~</button>
        </div>
      </header>
    </div>
  );
}

export default App;
