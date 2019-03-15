import { ADD_COMMENT } from "../constants";
import { normalizedComments } from "../fixtures";
import { arrToMap } from "../utils";

export default (commentsState = arrToMap(normalizedComments), action) => {
  const { type, payload, randomId } = action;

  switch (type) {
    case ADD_COMMENT:
      return commentsState.set(randomId, {
        ...payload.comment,
        id: randomId
      });

    default:
      return commentsState;
  }
};
