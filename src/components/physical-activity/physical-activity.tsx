import {isChecked} from '../../is-checked';
import {useInputType} from '../../types/use-input';

type PhysicalActivityProps = {
    physicalActivity: useInputType
};

export const PhysicalActivity = ({physicalActivity}: PhysicalActivityProps): JSX.Element => {

    return (
        <fieldset className="form__item">
            <legend className="heading">
                Физическая активность
            </legend>
            <ul className="radios-group">
                <li className="radio">
                    <div className="radio__wrapper">
                        <input id="activity-minimal" name="activity" defaultValue="min" type="radio" checked={isChecked(physicalActivity.value, 'min')} onChange={physicalActivity.onChange} required />
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
                        <input id="activity-low" name="activity" defaultValue="low" type="radio" checked={isChecked(physicalActivity.value, 'low')} onChange={physicalActivity.onChange} required />
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
                        <input id="activity-medium" name="activity" defaultValue="medium" type="radio" checked={isChecked(physicalActivity.value, 'medium')} onChange={physicalActivity.onChange} required />
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
                        <input id="activity-high" name="activity" defaultValue="high" type="radio" checked={isChecked(physicalActivity.value, 'high')} onChange={physicalActivity.onChange} required />
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
                        <input id="activity-maximal" name="activity" defaultValue="max" type="radio" checked={isChecked(physicalActivity.value, 'max')} onChange={physicalActivity.onChange} required />
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
