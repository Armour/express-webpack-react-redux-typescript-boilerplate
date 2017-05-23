import { connect, Dispatch } from 'react-redux';

import { addTodo } from 'actions';
import { TodoInput } from 'components/TodoInput';
import { ITodoAppState, ITodoInputDispatchProps, ITodoInputStateProps } from 'types';

const mapStateToProps = (/* state: ITodoAppState */): ITodoInputStateProps => {
  return {
    // ...
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ITodoAppState>): ITodoInputDispatchProps => {
  return {
    onSubmit: (inputValue: string) => {
      dispatch(addTodo(inputValue));
    },
  };
};

export const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoInput);
