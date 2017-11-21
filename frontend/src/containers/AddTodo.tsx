import { connect, Dispatch } from 'react-redux';

import { addTodo } from 'actions';
import { TodoInput } from 'components/TodoInput';
import { IAppState, ITodoInputDispatchProps } from 'types';

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): ITodoInputDispatchProps => ({
  onSubmit: (inputValue: string) => {
    dispatch(addTodo(inputValue));
  },
});

export const AddTodo = connect(
  null,
  mapDispatchToProps,
)(TodoInput);
