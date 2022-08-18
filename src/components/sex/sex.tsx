import {useInput} from '../../hooks/useInput';
import {SelectorKey} from '../../const';
import {updateGenre} from '../../store/actions';
import {isChecked} from '../../is-checked';

export const Sex = (): JSX.Element => {
  const gender = useInput(SelectorKey.Gender, (payload: string) => updateGenre(payload));

  return (
      <div className="form__item">
          <h2 className="heading">
              Пол
          </h2>
          <ul className="switcher">
              <li className="switcher__item">
                  <input id="gender-male" name="gender" defaultValue="male" type="radio" checked={isChecked(gender.value, 'male')} onChange={gender.onChange} required />
                  <label htmlFor="gender-male">
                      Мужчина
                  </label>
              </li>
              <li className="switcher__item">
                  <input id="gender-female" name="gender" defaultValue="female" type="radio" checked={isChecked(gender.value,'female')} onChange={gender.onChange} required />
                  <label htmlFor="gender-female">
                      Женщина
                  </label>
              </li>
          </ul>
      </div>
  );
}
