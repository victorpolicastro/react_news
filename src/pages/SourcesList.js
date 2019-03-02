import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSources} from '../redux/actions';
import {SelectOneMenu} from '../styles';

let source = '';

class SourcesList extends Component {

	componentDidMount(){
		this.props.fetchSources();
	}

	render(){
		return(
			<div>
				<SelectOneMenu id="select_source" onChange={setSource()} >
					<option value="">Filtrar por fonte</option>
					{this.props.sources.map((source, i) => {
					return(
						<option key={i}>
							{source.name}
						</option>
					)
				})}
				</SelectOneMenu>
			</div>
		);
	}
}

const setSource = () => {
	var field = document.getElementById('select_source');
	if (field != null){
		source = field.value;
		console.log(source);
	}
};

const mapStateToProps = state => {
  return {
    sources: state.Sources
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSources: () =>
      dispatch(fetchSources())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourcesList)