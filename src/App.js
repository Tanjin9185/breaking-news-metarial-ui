import {Button} from '@material-ui/core/';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import News from './Components/News/News';


function App() {
  const [article, setArticle] = useState([]);
  // const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=92c149fd68b14fdb98ed3bb708f01775";
  // useEffect(() => {
  //       fetch(url)
  //       .then(res => res.json())
  //       .then(data => setArticle(data.articles))
  // })
  useEffect(() => {
    axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=92c149fd68b14fdb98ed3bb708f01775')
    .then(data => setArticle(data.data.articles))
  }, [])

  
  return (
    <div>
      <h3>Total article : {article.length}</h3>
      {
        article.map(article =><News article={article}></News>)
      }
      
    </div>
    
  );
}

export default App;
