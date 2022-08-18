import {useInput} from '../../hooks/useInput';
import {SelectorKey} from '../../const';
import {updateAge, updateHeight, updateWeight} from '../../store/actions';

export const PhysicalParameters = (): JSX.Element => {
  const age = useInput(SelectorKey.Age, (payload) => updateAge(Number(payload)))
  const height = useInput(SelectorKey.Height, (payload) => updateHeight(Number(payload)))
  const weight = useInput(SelectorKey.Weight, (payload) => updateWeight(Number(payload)))

  return (
      <fieldset className="form__item form__parameters" name="parameters">
          <legend className="visually-hidden">
              Физические параметры
          </legend>
          <div className="inputs-group">
              <div className="input">
                  <div className="input__heading">
                      <label className="heading" htmlFor="age">
                          Возраст
                      </label>
                      <span className="input__heading-unit">
                        лет
                      </span>
                  </div>
                  <div className="input__wrapper">
                      <input type="text" id="age" name="age" placeholder='0' inputMode="decimal" maxLength={3} required value={age.value} onChange={age.onChange} />
                  </div>
              </div>
              <div className="input">
                  <div className="input__heading">
                      <label className="heading" htmlFor="height">
                          Рост
                      </label>
                      <span className="input__heading-unit">
                        см
                      </span>
                  </div>
                  <div className="input__wrapper">
                      <input type="text" id="height" name="height" placeholder='0' inputMode="decimal" maxLength={3} required value={height.value} onChange={height.onChange} />
                  </div>
              </div>
              <div className="input">
                  <div className="input__heading">
                      <label className="heading" htmlFor="weight">
                          Вес
                      </label>
                      <span className="input__heading-unit">
                        кг
                      </span>
                  </div>
                  <div className="input__wrapper">
                      <input type="text" id="weight" name="weight" placeholder='0' inputMode="decimal" maxLength={3} required value={weight.value} onChange={weight.onChange}/>
                  </div>
              </div>
          </div>
      </fieldset>
  );
}

