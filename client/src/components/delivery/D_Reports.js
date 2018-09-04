import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
import { getReport } from '../../actions/reportActions'
import { connect } from 'react-redux'
import { Table, Form } from 'semantic-ui-react'
import RC2 from 'react-chartjs2'

class D_Reports extends Component {

	state = {
		id:api.getProfile().id,
		name:api.getProfile().name,
		startDate:'',
		endDate:'',
		filterData:[],
		chartData:{}
	}

	componentDidMount() {
		getReport(this.state.id)
		// this.myChart = this.refs['canvas'].getChart()
		// this.myChart.data.datasets[0].points[2] = 50
		// this.myChart.update()
		// return <RC2 ref='canvas' data={chartData} options={chartOptions} type='bar' />
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleForm = (e) => {
		e.preventDefault()
		let dish = this.props.report.filter(item => item.date >= this.state.startDate && item.date <= this.state.endDate).map(item => item.dish)
		let trays = this.props.report.filter(item => item.date >= this.state.startDate && item.date <= this.state.endDate).map(item => item.trays)
		let filter = this.props.report.filter(item => item.date >= this.state.startDate && item.date <= this.state.endDate)
		this.setState({
			filterData:filter,
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

	printReport = (e) => {
		window.print()
	}

	resetReport = (e) => {
		this.setState({
		startDate:'',
		endDate:'',
		filterData:[],
		chartData:{}
		})
	}

	render() {
		return (
			<div>
				<div className='reportForm'>
					<h2>Select Start & End Dates Below</h2>
					<Form onSubmit={this.handleForm}>
						<Form.Group widths='equal'>
							<Form.Input fluid label='Start Date' id='startDate' name='startDate' value={this.state.startDate} onChange={this.handleChange} type='date' />
							<Form.Input fluid label='End Date' id='endDate' name='endDate' value={this.state.endDate} onChange={this.handleChange} type='date' />
						</Form.Group>
						<Form.Group className='buttons'>
							<Form.Button id='submit' type='submit'>Generate Report</Form.Button>
							<Form.Button id='print' onClick={this.printReport}>Print Report</Form.Button>
							<Form.Button id='reset' onClick={this.resetReport}>Reset Report</Form.Button>
						</Form.Group>
					</Form>
				</div>
				<div className='titles'>
					<h1>{this.state.name} Report</h1>
					<h2>{this.state.startDate} &ndash; {this.state.endDate}</h2>
				</div>
				<div className='reportTable'>
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
							{this.state.filterData.map((item, i) => (
								<Table.Row key={'key' + i}>
									<Table.Cell>{item.date.slice(0,10)}</Table.Cell>
									<Table.Cell>{item.dish}</Table.Cell>
									<Table.Cell>{item.trays}</Table.Cell>
									<Table.Cell>${item.value}</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
						<Table.Footer>
							<Table.Row>
								<Table.HeaderCell>&nbsp;</Table.HeaderCell>
								<Table.HeaderCell>Total</Table.HeaderCell>
								<Table.HeaderCell>{this.state.filterData.reduce((a,b) => a + b.trays, 0)}</Table.HeaderCell>
								<Table.HeaderCell>${this.state.filterData.reduce((a,b) => a + b.value, 0)}</Table.HeaderCell>
							</Table.Row>
						</Table.Footer>
					</Table>
				</div>
				<div className='titles'>
					<h1>{this.state.name} Chart</h1>
					<h2>{this.state.startDate} &ndash; {this.state.endDate}</h2>
				</div>
				<div className='reportChart'>
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