import React, {Component} from 'react'
import {withAuth, api} from '../Authentication'
import {getReport} from '../../actions/reportActions'
import Chart from 'chart.js'
import {connect} from 'react-redux'

class D_Reports extends Component {

	state = {
		id:api.getProfile().id,
		name:api.getProfile().name
	}

	componentDidMount() {
		getReport(this.state.id)
		var ctx = document.getElementById("rptChart");
		var rptChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["2018-08-31", "2018-09-01"],
				datasets: [{
					label: '# of Trays',
					data: [2, 2],
					/*backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)'
					],*/
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
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
								<td>{item.date}</td>
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
					<canvas id="rptChart"></canvas>
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