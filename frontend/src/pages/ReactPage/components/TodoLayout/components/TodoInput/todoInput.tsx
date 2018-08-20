import * as React from 'react';
import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { addTodo } from 'services/todos/actions';
import i18ns from './i18n';

// Component

interface ITodoInputDispatchProps {
  onSubmit(inputValue: string): void;
}

interface ITodoInputProps extends ITodoInputDispatchProps, InjectedI18nProps, InjectedTranslateProps { }

let input: HTMLInputElement;

export class TodoInput extends React.Component<ITodoInputProps> {
  constructor(props: ITodoInputProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'TodoInput', i18ns[key]);
    });
  }

  public onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    this.props.onSubmit(input.value);
    input.value = '';
  }

  public setInput = (node: HTMLInputElement): void => {
    input = node;
  }

  public render() {
    const { t } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className='input-field'>
            <input id='input-add-todo' type='text' ref={this.setInput} />
            <label>{t('add-todo')}</label>
          </div>
        </form>
      </div>
    );
  }
}

// Container

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): ITodoInputDispatchProps => ({
  onSubmit: (inputValue: string) => {
    dispatch(addTodo(inputValue));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(translate('TodoInput')(TodoInput));
