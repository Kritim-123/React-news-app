import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {



  constructor(){
    super();
    console.log("Hello I am a constructor from News Component.")

    this.state = {

      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-09-10&sortBy=publishedAt&apiKey=b8a2b171177f467f86ccefbd455980f1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(data);
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey - Top Headlines</h2>

        <div className="row">
            {this.state.articles.map((element) => {
              return(
                <div className="col-md-4"  key={element.url}>

                <NewsItem title = {element.title ? element.title.slice(0, 45): " "}
                 description = {element.description ? element.description.slice(0,87): " "}
                imageUrl= {element.urlToImage} newsUrl = {element.url}/>
  
                </div>
              )
            })}    
        </div>
        
      </div>
    )
  }
}

export default News
