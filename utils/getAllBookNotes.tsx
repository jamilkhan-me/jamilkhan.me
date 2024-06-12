import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getAllBookNotes = ({ newest = true, page = 1, limit = 8, tags } = {}) => {
  const folder = "bookNotes/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  // Get gray-matter data from each file.
  let bookNotes = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`bookNotes/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".mdx", ""),
      image: matterResult.data.image,
    };
  });

  // Filter by tags if any tags are provided.
  // if (tags.length > 0) {
  //   bookNotes = bookNotes.filter((note) =>
  //     tags.some((tag) => note.tags.includes(tag))
  //   );
  // }

  // Sort the book notes by date.
  bookNotes.sort((a, b) =>
    newest
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date)
  );

  // Implement pagination.
  const startIndex = (page - 1) * limit;
  const paginatedNotes = bookNotes.slice(startIndex, startIndex + limit);

  return paginatedNotes;
};

export default getAllBookNotes;
