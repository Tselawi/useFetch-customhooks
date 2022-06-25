import { useState } from 'react';
import './App.css';
import undraw from './images/undraw.svg';
import DisplayUser from './components/DisplayUser';
import useFetch from './hooks/useFetch';

const App = () => {
  const BASE_URL = 'https://inshortsapi.vercel.app/news?category=science';
  const { data: news, loading, error } = useFetch(BASE_URL);
  const [info, setInFo] = useState([]);

  function handleClick() {
    setInFo(JSON.stringify(news, undefined, 2));
  }
  const newsElements = news.map((item) => (
    <DisplayUser key={item.id} {...item} />
  ));
  return (
    <div>
      {info.length > 0 ? (
        <div className='container p-4'>
          <h1 className='text-center'>Hello useFetch-hooks</h1>
          {loading && <h3>Loading...!</h3>}
          {error && <p>Error: Something went wrong!</p>}
          <div>{newsElements}</div>
        </div>
      ) : (
        <div className='container p-4'>
          <h2 className='text-center text-muted text-underline p-3'>
            Find out the useFetch what it is?
          </h2>
          <img
            src={undraw}
            alt='usefetch'
            width={230}
            height={205}
            className='d-block m-auto mb-5'
          />
          <button
            className='btn btn-primary btn-lg btn-block w-100'
            onClick={handleClick}
          >
            <p className='text-fetch'>useFetch</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
