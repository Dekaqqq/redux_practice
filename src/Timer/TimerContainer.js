import { connect } from 'react-redux';
import { compose } from 'redux';
import throttle from 'lodash.throttle';
import withRenderLog from '../hoc/withRenderLog';
import * as timerActions from '../redux/timer/timerActions';
import Timer from './Timer';
import * as timerSelectors from '../redux/timer/timerSelectors';

const mapStateToProps = state => ({
    value: timerSelectors.getValue(state),
    step: timerSelectors.getStep(state),
});

const mapDispatchToProps = dispatch => ({
    onIncrement: step => dispatch(timerActions.increment(step)),
    onDecrement: step => dispatch(timerActions.decrement(step)),
});

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Timer);

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    withRenderLog,
)(Timer);
