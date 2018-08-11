import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { addTodo } from 'services/todos/actions';

// Component

interface ITodoInputDispatchProps {
  onSubmit(inputValue: string): void;
}

let input: HTMLInputElement;

class TodoInputComponent extends React.Component<ITodoInputDispatchProps> {
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
      <div>
        <form onSubmit={this.onSubmit}>
          <div className='input-field'>
            <input id='input-add-todo' type='text' ref={this.setInput} />
            <label>Add todo</label>
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

export const TodoInput = connect(
  null,
  mapDispatchToProps,
)(TodoInputComponent);
