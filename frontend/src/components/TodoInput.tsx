import * as React from 'react';

export interface ITodoInputDispatchProps {
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
