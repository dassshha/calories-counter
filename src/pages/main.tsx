import {Form} from '../components/form/form';
import {Result} from '../components/result/result';

const Main = (): JSX.Element => {
    return (
        <main className="main">
            <div className="container">
                <article className="counter">
                    <h1 className="counter__heading heading-main">
                        Счётчик калорий
                    </h1>
                    <Form/>
                    <Result/>
                </article>
            </div>
        </main>
    );
};

export {Main};
