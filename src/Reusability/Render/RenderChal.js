import React, {Component} from 'react'


class DataFetcher extends Component {
    state = {
        loading: false,
        data: null
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({data: data, loading: false}))
    }
    
    render() {
		const {loading, data} = this.state
        return (
			
			<div>
				{this.props.render({loading,data})}
			</div>
           
        )
    }
}

export default DataFetcher


 /**
  *	 <div>
	{this.props.render({
	loading: this.state.loading,
	data: this.state.data
	})}
	</div>
 */
             