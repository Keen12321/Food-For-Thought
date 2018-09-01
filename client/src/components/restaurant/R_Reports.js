import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
// import { Header } from 'semantic-ui-react'
import { getReport } from '../../actions/reportActions'
import RC2 from 'react-chartjs2'
import { connect } from 'react-redux'

class R_Reports extends Component {

	state = {
		id:api.getProfile().id,
		name:api.getProfile().name,
		chartData:{}
	}

	componentDidMount() {
		getReport(this.state.id)
		// this.myChart = this.refs['canvas'].getChart()
		// this.myChart.data.datasets[0].points[2] = 50
		// this.myChart.update()
		// return <RC2 ref='canvas' data={chartData} options={chartOptions} type='bar' />
	}

	componentWillReceiveProps(newProps) {
		if (this.props.report !== newProps.report) {
			let dish = newProps.report.map(item => item.dish)
			let trays = newProps.report.map(item => item.trays)
			this.setState({
				chartData:{
					labels:dish,
					datasets:[
						{
							label:'# of Trays',
							backgroundColor:'rgba(35,123,202,0.5)',
							borderColor:'rgba(35,123,202,1)',
							borderWidth:1,
							hoverBackgroundColor:'rgba(35,123,202,0.75)',
							hoverBorderColor:'rgba(35,123,202,1)',
							data:trays
						}
					]
				}
			})
		}
	}

	render() {
		return (
			<div>
				<div className="reportTable">
					<table>
						<thead>
							<tr>
								<th colSpan="4">{this.state.name} Report</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Date</th>
								<th>Dish</th>
								<th>Trays</th>
								<th>Value</th>
							</tr>
							{this.props.report.map((item, i) => (
							<tr key={"key" + i}>
								<td>{item.date.slice(0,10)}</td>
								<td>{item.dish}</td>
								<td>{item.trays}</td>
								<td>${item.value}</td>
							</tr>
							))}
						</tbody>
						<tfoot>
							<tr>
								<td colSpan="4">Export Report (Icebox)</td>
							</tr>
						</tfoot>
					</table>
				</div>
				<div className="reportChart">
					<p>{this.state.name} Chart</p>
					<RC2 data={this.state.chartData} type='bar' />
				</div>
			</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		report:appState.reportReduce.report
	}
}

export default withAuth(connect(mapStateToProps)(R_Reports))