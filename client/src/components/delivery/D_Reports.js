import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
import { getReportDelivery } from '../../actions/reportActions'
import { connect } from 'react-redux'
import { Table, Form } from 'semantic-ui-react'
import RC2 from 'react-chartjs2'

class D_Reports extends Component {

	state = {
		id:api.getProfile().id,
		name:api.getProfile().name,
		idTax:api.getProfile().tax_id,
		startDate:'',
		endDate:'',
		traysTotal:'',
		valueTotal:'',
		reportDates:'',
		filterData:[],
		traysData:{},
		valueData:{}
	}

	componentDidMount() {
		getReportDelivery(this.state.id)
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleForm = (e) => {
		e.preventDefault()
		let reportDates = `${this.state.startDate} - ${this.state.endDate}`
		let dish = this.props.reportDelivery.filter(item => item.date >= this.state.startDate && item.date <= this.state.endDate).map(item => item.dish)
		let trays = this.props.reportDelivery.filter(item => item.date >= this.state.startDate && item.date <= this.state.endDate).map(item => item.trays)
		let value = this.props.reportDelivery.filter(item => item.date >= this.state.startDate && item.date <= this.state.endDate).map(item => item.value)
		let filter = this.props.reportDelivery.filter(item => item.date >= this.state.startDate && item.date <= this.state.endDate)
		let traysTotal = filter.reduce((a,b) => a + b.trays, 0)
		let valueTotal = filter.reduce((a,b) => a + b.value, 0)
		this.setState({
			traysTotal:traysTotal,
			valueTotal:valueTotal,
			reportDates:reportDates,
			filterData:filter,
			traysData:{
				labels:dish,
				datasets:[
					{
						label:'Trays (#)',
						backgroundColor:'rgba(29,122,202,0.5)',
						borderColor:'rgba(29,122,202,1)',
						borderWidth:1,
						hoverBackgroundColor:'rgba(29,122,202,0.75)',
						hoverBorderColor:'rgba(29,122,202,1)',
						data:trays
					}
				]
			},
			valueData:{
				labels:dish,
				datasets:[
					{
						label:'Trays ($)',
						backgroundColor:'rgba(31,177,61,0.5)',
						borderColor:'rgba(31,177,61,1)',
						borderWidth:1,
						hoverBackgroundColor:'rgba(31,177,61,0.75)',
						hoverBorderColor:'rgba(31,177,61,1)',
						data:value
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
			reportDates:'',
			idTax:'',
			filterData:[],
			traysData:{},
			valueData:{}
		})
	}

	render() {
		return (
			<div className='reportContainer'>
				<div className='reportForm'>
					<h2>Select Start & End Dates Below</h2>
					<Form onSubmit={this.handleForm}>
						<Form.Group widths='equal'>
							<Form.Input fluid label='Start Date' id='startDate' name='startDate' value={this.state.startDate} onChange={this.handleChange} type='date' />
							<Form.Input fluid label='End Date' id='endDate' name='endDate' value={this.state.endDate} onChange={this.handleChange} type='date' />
						</Form.Group>
						<Form.Group className='buttons'>
							<Form.Button id='submit' type='submit' content='Generate Report' />
							<Form.Button id='print' content='Print Report' onClick={this.printReport} />
							<Form.Button id='reset' content='Reset Report' onClick={this.resetReport} />
						</Form.Group>
					</Form>
				</div>
				<div className='titles'>
					<h1>{this.state.name} Report</h1>
					<h2>{this.state.reportDates}</h2>
					<h3>501c3 ID: {this.state.idTax}</h3>
				</div>
				<div className='reportTable'>
					<h2>Receipt History</h2>
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
								<Table.HeaderCell>{this.state.traysTotal}</Table.HeaderCell>
								<Table.HeaderCell>${this.state.valueTotal}</Table.HeaderCell>
							</Table.Row>
						</Table.Footer>
					</Table>
				</div>
				<div className='reportCharts'>
					<div className='reportChart'>
						<h2>Number of Trays Received</h2>
						<RC2 data={this.state.traysData} type='bar' />
					</div>
					<div className='reportChart'>
						<h2>Value of Trays Received</h2>
						<RC2 data={this.state.valueData} type='bar' />
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		reportDelivery:appState.reportReducer.reportDelivery
	}
}

export default withAuth(connect(mapStateToProps)(D_Reports))