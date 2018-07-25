import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { addTodo } from 'actions';
import { ITodoInputDispatchProps, TodoInput } from 'components/TodoInput';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): ITodoInputDispatchProps => ({
  onSubmit: (inputValue: string) => {
    dispatch(addTodo(inputValue));
  },
});

export const TodoInputContainer = connect(
  null,
  mapDispatchToProps,
)(TodoInput);
