import React, {Component} from 'react'
import {withAuth, api} from '../Authentication'
import {getReport} from '../../actions/reportActions'
// import Chart from 'chart.js'
import RC2 from 'react-chartjs2'
import {Label, Table} from 'semantic-ui-react'
import {connect} from 'react-redux'

class D_Reports extends Component {

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
				<div className="report">
					<h1>{this.state.name} Report</h1>
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Date</Table.HeaderCell>
								<Table.HeaderCell>Dish</Table.HeaderCell>
								<Table.HeaderCell>Trays</Table.HeaderCell>
								<Table.HeaderCell>Value</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{this.props.report.map((item, i) => (
							<Table.Row key={"key" + i}>
								<Table.Cell>{item.date.slice(0,10)}</Table.Cell>
								<Table.Cell>{item.dish}</Table.Cell>
								<Table.Cell>{item.trays}</Table.Cell>
								<Table.Cell>${item.value}</Table.Cell>
							</Table.Row>
							))}
						</Table.Body>
						<Table.Footer>
							<Table.Row>
								<Table.HeaderCell colSpan="4">
									<Label ribbon>Export Report (Icebox)</Label>
								</Table.HeaderCell>
							</Table.Row>
						</Table.Footer>
					</Table>
				</div>
				<div className="report">
					<h1>{this.state.name} Chart</h1>
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

export default withAuth(connect(mapStateToProps)(D_Reports))