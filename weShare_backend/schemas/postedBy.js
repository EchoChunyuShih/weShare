export default {
  name: "postedBy",
  title: "PostedBy",
  //postedBy is a reference to users
  type: "reference",
  to: [{ type: "user" }],
};
