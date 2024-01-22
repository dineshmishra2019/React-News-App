import React, { Component } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }
    articles = []

      constructor(){
        super();
        console.log("Hi I am a constrcuctor");
        this.state={
            articles: [],
            loading: false,
            page:1
        }
      }
     
  render() {
   
    return (
      <div className='container my-3'>
        <h2> News App India</h2>
        
            <div className = 'row'>
            {this.state.articles.map((Element)=>{
                   return   <div className="col-md-4" key={Element.url}>
                    <Newsitems  title={Element.title} description={Element.description} imageUri={Element.urlToImage} content={Element.content} url={Element.url}/>
                </div>

            })}                 
            </div>
        
            <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; Previous</button>
                <button disabled={this.state.page >= Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
            </div>
            
            
      </div>


      
    )
  }
  handlenextclick = async()=>{
        console.log("Next")

       if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)){

       }
       else{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed1850a81af049f9be5d29fc1c163456&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedata = await data.json()
       
        this.setState({
            page: this.state.page + 1,
            articles: parsedata.articles
        })
      }
  }
  handleprevclick = async()=>{
        console.log("Previos")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed1850a81af049f9be5d29fc1c163456&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles
        })
  }
  
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed1850a81af049f9be5d29fc1c163456&page=1&pageSize=${this.state.pageSize}`
    let data = await fetch(url);
    let parsedata = await data.json()
    console.log(parsedata);
    this.setState({articles: parsedata.articles, totalResults: parsedata.totalResults})
  }
}

export function createNews() {
    return new News();
}

export default News
