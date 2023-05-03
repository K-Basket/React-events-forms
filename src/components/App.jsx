import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
// импорт использован с реэкспортом (сщздан дополнительно файл index.js, в котором стоит экспорт)
import { ColorPicker } from './ColorPicker';

import colorPicker from './data/colorPicker.json';

export const App = () => {
  return (
    <div>
      <h1>01 Событие и сосотяние</h1>

      <section>
        <h2>ColorPicker</h2>
        <ColorPicker options={colorPicker} />
      </section>

      <section>
        <h2>Dropdown</h2>
        <Dropdown />
      </section>

      <section>
        <h2>Counter</h2>
        <Counter initialValue={49} />
        <Counter />
      </section>
    </div>
  );
};
