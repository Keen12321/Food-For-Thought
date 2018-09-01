import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
import { Header } from 'semantic-ui-react'
import { getReport } from '../../actions/reportActions'
import { connect } from 'react-redux'

class D_Reports extends Component {
	state = {
		id:api.getProfile().id,
		name:api.getProfile().name
	}

	componentDidMount() {
		getReport(this.state.id)
	}

	render() {
		return (
      <div>
	      <div>
	   			<Header>Reports Page</Header>
	      </div>

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
									<td>{item.date}</td>
									<td>{item.dish}</td>
									<td>{item.trays}</td>
									<td>${item.value}</td>
								</tr>
								))}
							</tbody>
							<tfoot>
								<tr>
									<td colSpan="4">Export Report</td>
								</tr>
							</tfoot>
						</table>
					</div>
					<div className="reportChart">
						<p>INSERT CHART HERE!</p>
					</div>
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

export default withAuth( connect(mapStateToProps)(D_Reports) )
