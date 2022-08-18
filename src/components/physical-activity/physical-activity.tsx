import {useInput} from '../../hooks/useInput';
import {SelectorKey} from '../../const';
import {updateActivity} from '../../store/actions';
import {isChecked} from '../../is-checked';

export const PhysicalActivity = (): JSX.Element => {
    const activity = useInput(SelectorKey.Activity, (payload: string) => updateActivity(payload));
    return (
        <fieldset className="form__item">
            <legend className="heading">
                Физическая активность
            </legend>
            <ul className="radios-group">
                <li className="radio">
                    <div className="radio__wrapper">
                        <input id="activity-minimal" name="activity" defaultValue="min" type="radio" checked={isChecked(activity.value, 'min')} onChange={activity.onChange} required />
                        <label htmlFor="activity-minimal">
                            Минимальная
                        </label>
                    </div>
                    <p className="radio__description">
                        Сидячая работа и нет физических нагрузок
                    </p>
                </li>
                <li className="radio">
                    <div className="radio__wrapper">
                        <input id="activity-low" name="activity" defaultValue="low" type="radio" checked={isChecked(activity.value, 'low')} onChange={activity.onChange} required />
                        <label htmlFor="activity-low">
                            Низкая
                        </label>
                    </div>
                    <p className="radio__description">
                        Редкие, нерегулярные тренировки, активность в быту
                    </p>
                </li>
                <li className="radio">
                    <div className="radio__wrapper">
                        <input id="activity-medium" name="activity" defaultValue="medium" type="radio" checked={isChecked(activity.value, 'medium')} onChange={activity.onChange} required />
                        <label htmlFor="activity-medium">
                            Средняя
                        </label>
                    </div>
                    <p className="radio__description">
                        Тренировки 3-5 раз в неделю
                    </p>
                </li>
                <li className="radio">
                    <div className="radio__wrapper">
                        <input id="activity-high" name="activity" defaultValue="high" type="radio" checked={isChecked(activity.value, 'high')} onChange={activity.onChange} required />
                        <label htmlFor="activity-high">
                            Высокая
                        </label>
                    </div>
                    <p className="radio__description">
                        Тренировки 6-7 раз в неделю
                    </p>
                </li>
                <li className="radio">
                    <div className="radio__wrapper">
                        <input id="activity-maximal" name="activity" defaultValue="max" type="radio" checked={isChecked(activity.value, 'max')} onChange={activity.onChange} required />
                        <label htmlFor="activity-maximal">
                            Очень высокая
                        </label>
                    </div>
                    <p className="radio__description">
                        Больше 6 тренировок в неделю и физическая работа
                    </p>
                </li>
            </ul>
        </fieldset>
    );
}
