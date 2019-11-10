import tv4 from 'tv4';
import stateValidation from '../schemas/state-validation.json';

const stateValidator = store => next => action => {
    next(action);

    const isValid = tv4.validate(store.getState(), stateValidation);

    if (!isValid) {
        console.warn('Invalid state schema detected!');
        console.log(tv4.error);
    }
};

export default stateValidator;
