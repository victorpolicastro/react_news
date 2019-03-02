import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchNews} from '../redux/actions';
import {Button, SourceText, DivBottom, TitleLink, FontBold, NewsDate} from '../styles';

let count = 1;

class NewsList extends Component {

	componentDidMount() {
		this.props.fetchNews();
	}

	render() {
		return(
			<div>
				{this.props.news.map((article, i) => {
					const date = new Date(article.publishedAt);
					let day = date.getDate();
					let month = date.getMonth();
					const year = date.getFullYear();
					
					if(day < 10){
						day = "0" + day;
					}

					if(month < 10){
						month = "0" + month;
					}

					return(
						<DivBottom key={i}>
						<br />
							<TitleLink href={article.url}>{article.title}</TitleLink> <br />
							<br />
							<div>
								<NewsDate>{day}/{month}/{year}</NewsDate>
								<SourceText><b>{article.source.name}</b></SourceText>
							</div>
							<br/>
						</DivBottom>
					)
				})}
				<br />
				<Button onClick={this.props.fetchNews}><FontBold>Mostrar mais</FontBold></Button>
			</div>
		);
	}
}

const updateCount = () => {
	count = count + 1;
};

const mapStateToProps = state => {
  updateCount();
  return {
    news: state.News
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: () =>
      dispatch(fetchNews(count))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList)