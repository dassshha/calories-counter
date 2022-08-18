import {useSelector} from 'react-redux';
import {getCalories} from '../../store/selectors';

export const Result = (): JSX.Element => {
    const calories = useSelector(getCalories);

  return (
      <section className="counter__result counter__result">
          <h2 className="heading">
              Ваша норма калорий
          </h2>
          <ul className="counter__result-list">
              <li className="counter__result-item">
                  <h3>
                      <span id="calories-norm">{calories.norm}</span> ккал
                  </h3>
                  <p>
                      поддержание веса
                  </p>
              </li>
              <li className="counter__result-item">
                  <h3>
                      <span id="calories-minimal">{calories.min}</span> ккал
                  </h3>
                  <p>
                      снижение веса
                  </p>
              </li>
              <li className="counter__result-item">
                  <h3>
                      <span id="calories-maximal">{calories.max}</span> ккал
                  </h3>
                  <p>
                      набор веса
                  </p>
              </li>
          </ul>
      </section>
  );
}
