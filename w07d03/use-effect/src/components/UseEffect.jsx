import React from 'react';
import axios from 'axios';

const UseEffect = () => {
  const [count, setCount] = React.useState(0);
  const [search, setSearch] = React.useState('');
  const [item, setItem] = React.useState({});
  const [userInfo, setUserInfo] = React.useState({});

  React.useEffect(() => {
    console.log('changing title');
    document.title = `You clicked ${count} times!`;
  }, [count]);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     console.log(`Current count is ${count}`);
  //   }, 3000);
  // });

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log(`Current count is ${count}`);
    }, 3000);

    const cleanup = () => {
      console.log('running cleanup');
      clearInterval(interval);
    };

    return cleanup;
  }, [count]);

  // React.useEffect(() => {
  //   setCount(count + 1);
  // }, [count]);

  React.useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/andydlindsay/chef-andy/ingredients')
      .then(res => {
        // setItem(res.data);
        console.log(res);
        // const { author } = res.data;

        // axios
        //   .get(`https://hn.algolia.com/api/v1/users/${author}`)
        //   .then(response => {
        //     setUserInfo(response.data);
        //   });
      });
  }, []);

  return (
    <div>
      <h2>UseEffect</h2>
      <div>
        <h3>Count: { count }</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div>
        <label htmlFor="search">Search Term:</label>
        <input 
          type="text" 
          id="search" 
          value={search} 
          onChange={(event) => setSearch(event.target.value)}
        />
        <h3>Search term: {search}</h3>
      </div>

      <div>
        <h2>{item.title}</h2>
        <h3>By: {userInfo.username}</h3>
        <h4>Bio: {userInfo.about}</h4>
      </div>
    </div>
  );
};

export default UseEffect;
