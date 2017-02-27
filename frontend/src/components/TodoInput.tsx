import React from 'react';

export interface ITodoInputStateProps {}

export interface ITodoInputDispatchProps {
  onSubmit: (inputValue: string) => void;
}

type ITodoInputProps = ITodoInputStateProps & ITodoInputDispatchProps;

interface ITodoInputState {}

let input: HTMLInputElement;

class TodoInput extends React.Component<ITodoInputProps, ITodoInputState> {
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
          <input ref={this.setInput}/>
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
