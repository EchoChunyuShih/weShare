export default {
  name: "pin",
  title: "Pin",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "about",
      title: "About",
      type: "string",
    },
    {
      name: "destination",
      title: "Destination",
      type: "url",
    },
    {
      name: "caterogy",
      title: "Category",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "string",
      options: {
        //hotspot is a preprty for options for image type, enables the UI for selecting whast sraes of an image should always be cropped or not cropped when resizing. default is false.
        hotspot: true,
      },
    },
    {
      name: "userId",
      title: "UserID",
      type: "string",
    },
    {
      name: "postedBy",
      title: "PostedBy",
      //sanity is smart enough to know this is a refernce to another doc.
      type: "postedBy",
    },
    {
      name: "save",
      title: "Save",
      type: "array",
      //means we have to create a new schema for save
      of: [{ type: "save" }],
    },
    {
      name: "comment",
      title: "Comment",
      type: "array",
      //means we have to create a new schema for comment
      of: [{ type: "comment" }],
    },
  ],
};
