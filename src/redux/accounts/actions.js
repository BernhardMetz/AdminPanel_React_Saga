import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  setState: ["payload"],
  getUserList: null,
  getUserAcct: ["email"]
}, {prefix: 'U_'});

export const types = Types;
export default Creators;
