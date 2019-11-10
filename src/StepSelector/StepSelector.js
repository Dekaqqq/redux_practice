import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { changeStep } from '../redux/timer/timerActions';
import * as timerSelectors from '../redux/timer/timerSelectors';

const options = [
    {
        value: 5,
        label: 5,
    },
    {
        value: 10,
        label: 10,
    },
    {
        value: 15,
        label: 15,
    },
];

const findOption = value => options.find(el => el.value === value);

const StepSelector = ({ value, onChange }) => {
    return (
        <div>
            <Select
                options={options}
                value={findOption(value)}
                onChange={onChange}
            />
        </div>
    );
};

const mapStateToProps = state => ({
    value: timerSelectors.getStep(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: step => dispatch(changeStep(step.value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StepSelector);
