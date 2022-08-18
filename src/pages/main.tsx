import {Form} from '../components/form/form';
import {Result} from '../components/result/result';
import {useState} from 'react';

export const Main = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <main className="main">
            <div className="container">
                <article className="counter">
                    <h1 className="counter__heading heading-main">
                        Счётчик калорий
                    </h1>
                    <Form showResult={() => setIsVisible(true)} hideResult={() => setIsVisible(false)}/>
                    {isVisible && <Result/>}
                </article>
            </div>
        </main>
    );
};
