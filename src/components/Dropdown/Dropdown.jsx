import React, { Component } from 'react';
import css from './Dropdown.module.css';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  // в prevState.visible передается текущее состояние из state и при клике по кнопке будет меняться на  противоположное
  toggle = () => {
    this.setState(prevState => {
      return {
        visible: !prevState.visible,
      };
    });
  };

  // show = () => {
  //   this.setState({ visible: true });
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    return (
      <div className={css.Dropdown}>
        <button
          type="button"
          className={css.Dropdown.toggle}
          onClick={this.toggle}
        >
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>

        {this.state.visible && (
          <div className={css.Dropdown__menu}>Выпадающее меню</div>
        )}
      </div>
    );
  }
}

// ============= Ниже вариант с двумя кнопками и двумя методами ================

// export class Dropdown extends Component {
//   state = {
//     visible: false,
//   };

//   show = () => {
//     this.setState({ visible: true });
//   };

//   hide = () => {
//     this.setState({ visible: false });
//   };

//   render() {
//     return (
//       <div className={css.Dropdown}>
//         <button
//           type="button"
//           className={css.Dropdown.toggle}
//           onClick={this.show}
//         >
//           Показать
//         </button>
//         <button
//           type="button"
//           className={css.Dropdown.toggle}
//           onClick={this.hide}
//         >
//           Скрыть
//         </button>

//         {this.state.visible && (
//           <div className={css.Dropdown__menu}>Выпадающее меню</div>
//         )}
//       </div>
//     );
//   }
// }
