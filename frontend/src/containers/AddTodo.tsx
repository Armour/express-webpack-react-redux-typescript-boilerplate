import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { addTodo } from 'actions';
import { TodoInput } from 'components/TodoInput';
import { ITodoInputDispatchProps } from 'types';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): ITodoInputDispatchProps => ({
  onSubmit: (inputValue: string) => {
    dispatch(addTodo(inputValue));
  },
});

export const AddTodo = connect(
  null,
  mapDispatchToProps,
)(TodoInput);
