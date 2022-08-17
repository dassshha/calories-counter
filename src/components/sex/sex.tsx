const Sex = (): JSX.Element => {
  return (
      <div className="form__item">
          <h2 className="heading">
              Пол
          </h2>
          <ul className="switcher">
              <li className="switcher__item">
                  <input id="gender-male" name="gender" defaultValue="male" type="radio" defaultChecked required />
                  <label htmlFor="gender-male">
                      Мужчина
                  </label>
              </li>
              <li className="switcher__item">
                  <input id="gender-female" name="gender" defaultValue="female" type="radio" required />
                  <label htmlFor="gender-female">
                      Женщина
                  </label>
              </li>
          </ul>
      </div>
  );
}

export {Sex};
