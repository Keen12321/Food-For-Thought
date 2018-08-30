import React, {Component} from 'react'
import {withAuth} from '../Authentication'
import {getReport} from '../../actions/reportActions'
// import Chart from 'chart.js'
import {connect} from 'react-redux'

class R_Reports extends Component {

	componentDidMount() {
		getReport()
	}

	render() {
		return (
			<div>
				<div className="reportTable">
					<table>
						<thead>
							<tr>
								<th colSpan="5">Restaurant Report</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Date</th>
								<th>Restaurant</th>
								<th>Dish</th>
								<th>Trays</th>
								<th>Value</th>
							</tr>
							{this.props.report.map((item, i) => (
							<tr key={"key" + i}>
								<td>{item.date}</td>
								<td>{item.name}</td>
								<td>{item.dish}</td>
								<td>{item.trays}</td>
								<td>${item.value}</td>
							</tr>
							))}
						</tbody>
						<tfoot>
							<tr>
								<td colSpan="5">Export Report</td>
							</tr>
						</tfoot>
					</table>
				</div>
				<div className="reportChart">
					<p>INSERT CHART HERE!</p>
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