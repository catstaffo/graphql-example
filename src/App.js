import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import config from "./aws-exports";

function App() {
  useEffect(() => {
    const pullData = async () => {
      let data = await fetch(config.aws_appsync_graphqlEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Api-Key": config.aws_appsync_apiKey,
        },
        body: JSON.stringify({
          query: `query MyQuery {
          listFNotes {
            items {
              id
              name
              notes {
                items {
                  content
                  title
                  id
                  comments {
                    items {
                      content
                      id
                    }
                  }
                }
              }
            }
          }
        }
          `,
        }),
      });
      data = await data.json();
      console.log(data);
    };
    pullData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
