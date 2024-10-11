import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    console.log("Hello I am a constructor from News Component.")

    this.state = {

      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-10&sortBy=publishedAt&apiKey=b8a2b171177f467f86ccefbd455980f1&page=1 &pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(data);
    this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults})
  }

  handlePrevClick= async()=>{
    console.log("Previous Arrow Clicked.")

    console.log("Next Arrow Clicked.")
    console.log("cdm");
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-10&sortBy=publishedAt&apiKey=b8a2b171177f467f86ccefbd455980f1&page=${this.state.page - 1} &pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(data);
    this.setState({articles: parsedData.articles})

    this.setState({
      page: this.state.page -1,
    })
  }

  handleNextClick= async()=>{

    if(this.state.page +1 > Math.ceil(this.statetotalResults/20)){

    }
    else{

    console.log("Next Arrow Clicked.")
    console.log("cdm");
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-10&sortBy=publishedAt&apiKey=b8a2b171177f467f86ccefbd455980f1&page=${this.state.page + 1} &pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(data);
    this.setState({articles: parsedData.articles})

    this.setState({
      page: this.state.page +1,
    })
  }
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">News Monkey - Top Headlines</h2>

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
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type = "button" className="btn btn-dark"onClick={this.handlePrevClick}> &laquo; Previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.statetotalResults/this.props.pageSize)} type= "button" className = "btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News
