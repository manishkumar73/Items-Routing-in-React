import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Item( match) {

  useEffect( () => {
      fetchItem();
      console.log(match)
  },[]);


  const [item, setItem] = useState({
      images : {}
  });

  const fetchItem = async () =>{
      const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
      const item = await fetchItem.json()
      console.log(item);

      setItem(item);
  }


  return (
      <div>
          <h1>Item</h1>
      </div>
  );
}

export default Item;
