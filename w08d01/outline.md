# Outline

### Breakdown the UI into components
* Demonstrate the available endpoints
  * http://localhost:8001/api/parks
  * http://localhost:8001/api/parks/3
  * http://localhost:8001/api/parks/3/reviews

* Outline the components needed
  - App
    - ParkList
    - ParkListItem

### Create some fake data

```js
const parkData = [
  {
    id: 1,
    name: 'Park number one',
    location: 'Saskatchewan',
    averageReview: 4.5
  },
  {
    id: 2,
    name: 'Park number two',
    location: 'Ontario',
    averageReview: 4.4
  },
  {
    id: 3,
    name: 'Park number three',
    location: 'Quebec',
    averageReview: 4.2
  },
];

export default parkData;
```

### Create ParkList.jsx

```jsx
// src/components/ParkList.jsx
import ParkListItem from './ParkListItem';

const ParkList = (props) => {
  console.log(props);

  const mappedParks = props.parks.map((park) => {
    return (
      <ParkListItem key={park.id} park={park} />
    );
  });

  return (
    <div>
      { mappedParks }
    </div>
  );
};

export default ParkList;
```

### Create ParkListItem.jsx

```jsx
// src/components/ParkListItem.jsx
import '../styles/ParkListItem.css';

const ParkListItem = (props) => {
  return (
    <div className="park-list-item">
      <h2 className="park-list-item--header">Name: {props.park.name} ({props.park.id})</h2>
      <div className="park-list-item--footer">
        <h3>Location: {props.park.location}</h3>
        <h3>Average Review: {props.park.averageReview}</h3>
      </div>
    </div>
  );
};

export default ParkListItem;
```

### Add SASS

```css
.park-list-item {
  border: 4px dotted lightgreen;
  border-radius: 15px;
  padding: 0 20px;
  margin-bottom: 10px;
}

.park-list-item--header {
  color: brown;
}

.park-list-item--footer {
  display: flex;
  justify-content: space-between;
}
```

```scss
.park-list-item {
  border: 4px dotted lightgreen;
  border-radius: 15px;
  padding: 0 20px;
  margin-bottom: 10px;

  &--header {
    color: brown;
  }

  &--footer {
    display: flex;
    justify-content: space-between;
  }
}
```

### Switch over to loading the data from the server

```jsx
// src/App.js
import './App.css';
import {useState, useEffect} from 'react';

// components
import ParkList from './components/ParkList';

// fake data
// import parkData from './data/parks';

const App = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch('/api/parks')
      .then(res => res.json())
      .then(parks => setParks(parks));
  }, []);

  return (
    <div className="App">
      <h2>React Review</h2>
      <ParkList parks={parks} />
    </div>
  );
};

export default App;
```

### Discuss CORS and the `proxy` key
* Don't forget to restart the webpack server so it loads the configuration

```json
// inside package.json
{
  "proxy": "http://localhost:8001"
}
```

### Refactor to a custom hook

```js
// src/hooks/useApplicationData.js
import {useState, useEffect} from 'react';

const useApplicationData = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch('/api/parks')
      .then(res => res.json())
      .then(parks => setParks(parks));
  }, []);

  return parks;
};

export default useApplicationData;
```
