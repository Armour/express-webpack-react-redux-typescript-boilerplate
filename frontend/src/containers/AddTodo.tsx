import { connect, Dispatch } from 'react-redux';

import { addTodo } from 'actions';
import { TodoInput } from 'components/TodoInput';
import { ITodoAppState, ITodoInputDispatchProps } from 'types';

// const mapStateToProps = (): ITodoInputStateProps => ({
//   // ...
// });

const mapDispatchToProps = (dispatch: Dispatch<ITodoAppState>): ITodoInputDispatchProps => ({
  onSubmit: (inputValue: string) => {
    dispatch(addTodo(inputValue));
  },
});

export const AddTodo = connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(TodoInput);
