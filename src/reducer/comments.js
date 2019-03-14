import { normalizedComments } from "../fixtures";
const defaultComments = [...normalizedComments];

export default (commentsState = defaultComments, action) => {
  const { type } = action;

  switch (type) {
    default:
      return commentsState;
  }
};
