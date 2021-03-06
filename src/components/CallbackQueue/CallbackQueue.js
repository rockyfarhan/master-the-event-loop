import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
	ConsoleContainer,
	ConsoleData,
	ConsoleHeader,
	ConsoleTitle,
	QueueList,
	ListItem,
} from '../../styles/console'
import { Box } from '../../styles/flex'

// For testing actions
import {
	addToCallbackQueue,
	removeFromCallbackQueue,
} from './../../redux/callbackQueue/callbackQueue.actions'

class CallbackQueue extends Component {
	render() {
		const stack = this.props.callbackQueue.map((currLine, i) => (
			<ListItem key={`callback_queue_item${i}`}>{currLine.name}</ListItem>
		))

		return (
			<>
				<ConsoleContainer>
					<ConsoleHeader>
						<Box display="flex" justifyContent="center" alignItems="center">
							<ConsoleTitle p="10px">Callback Queue</ConsoleTitle>
						</Box>
					</ConsoleHeader>

					<ConsoleData>
						<Box display="flex" justifyContent="center" m="20px 0">
							<QueueList>{stack}</QueueList>
						</Box>
					</ConsoleData>
				</ConsoleContainer>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	callbackQueue: state.callbackQueue.stack,
})

// For testing the actions
const mapDispatchToProps = (dispatch) => ({
	enqueue: (value) => dispatch(addToCallbackQueue(value)),
	dequeue: () => dispatch(removeFromCallbackQueue()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CallbackQueue)
