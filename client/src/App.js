import { useEffect, useState } from 'react';

const App = () => {
  const [response, setResponse] = useState('')
  const server = "http://localhost:3000"

  useEffect(() => {
    callApi()
      .then(res => setResponse(res.express))
      .catch(err => console.error(err));
  }, [])

  const callApi = async () => {
    console.log()
    const response = await fetch(server + '/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  return (
    <div>
      <p>{response}</p>
    </div>
  );
}

export default App;
