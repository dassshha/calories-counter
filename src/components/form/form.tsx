import {Sex} from '../sex/sex';
import {PhysicalParameters} from '../ physical-parameters/ physical-parameters';
import {PhysicalActivity} from '../physical-activity/physical-activity';
import {FormSubmit} from '../form-submit/form-submit';
import {FormEvent} from 'react';
import {countCalories} from '../../count-calories';
import {useInput} from '../../hooks/use-input';
import {useDispatch} from 'react-redux';
import {updateCalories} from '../../store/actions';

type FormProps = {
    showResult: () => void,
    hideResult: () => void
};

export const Form = ({showResult, hideResult}: FormProps): JSX.Element => {
    const gender = useInput<string>('male');
    const age = useInput<number>(0);
    const height = useInput<number>(0);
    const weight = useInput<number>(0);
    const physicalActivity = useInput<string>('min');

    const dispatch = useDispatch();

      const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
            showResult();
            const calories = countCalories(gender.value, age.value, height.value, weight.value, physicalActivity.value);
            dispatch(updateCalories(calories));
        }

      const handleReset = (evt: FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
            hideResult();
            gender.onReset();
            age.onReset();
            height.onReset();
            weight.onReset();
            physicalActivity.onReset();
        }

      return (
          <form className="counter__form form" name="counter" action="#" method="post" onSubmit={handleSubmit} onReset={handleReset}>
              <Sex gender={gender}/>
              <PhysicalParameters age={age} height={height} weight={weight}/>
              <PhysicalActivity physicalActivity={physicalActivity}/>
              <FormSubmit age={age.value} height={height.value} weight={weight.value}/>
          </form>
      );
}
