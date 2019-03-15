import { Record, OrderedMap } from "immutable";
import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from "../constants";
import { arrToMap } from "../utils";

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
});

const ReducerRecord = Record({
  entities: new OrderedMap({})
});

export default (commentsState = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action;

  switch (type) {
    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return commentsState.mergeIn(["entities"], arrToMap(response, CommentRecord));

    case ADD_COMMENT:
      return commentsState.setIn(
        ["entities", randomId],
        new CommentRecord({ ...payload.comment, id: randomId })
      );

    default:
      return commentsState;
  }
};
