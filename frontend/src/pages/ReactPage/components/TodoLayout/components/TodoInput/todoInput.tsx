import React, { Fragment } from 'react';
import { Translation } from 'react-i18next';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { addTodo } from 'services/todos/actions';

// Component

interface ITodoInputDispatchProps {
  onSubmit(inputValue: string): void;
}

let input: HTMLInputElement;

export class TodoInput extends React.Component<ITodoInputDispatchProps> {
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
    return (
      <Translation ns='reactPage'>
        {(t) => (
          <Fragment>
            <form onSubmit={this.onSubmit}>
              <div className='input-field'>
                <input id='input-addTodo' type='text' ref={this.setInput} />
                <label>{t('todoLayout.todoInput.addTodo')}</label>
              </div>
            </form>
          </Fragment>
        )}
      </Translation>
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
)(TodoInput);
