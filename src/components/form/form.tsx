import {Sex} from '../sex/sex';
import {PhysicalParameters} from '../ physical-parameters/ physical-parameters';
import {PhysicalActivity} from '../physical-activity/physical-activity';
import {FormSubmit} from '../form-submit/form-submit';

export const Form = (): JSX.Element => {
  return (
      <form className="counter__form form" name="counter" action="#" method="post">
          <Sex/>
          <PhysicalParameters/>
          <PhysicalActivity/>
          <FormSubmit/>
      </form>
  );
}
