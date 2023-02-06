import { defineCollection } from "astro:content";
import { blogSchema, } from "./_schemas";

// export const collections = {
//   'blog': defineCollection({ schema: blogSchema }),
//   'math': defineCollection({ schema: mathSchema }),
// };

const blogCollection = defineCollection({
  schema: blogSchema,
});


// export const collections = { blog };
export const collections = {
  'blog': blogCollection,
};
