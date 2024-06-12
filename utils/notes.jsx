import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export function loadNote(slug) {
  const fileName = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;

  return fs.readFileSync(path.join(process.cwd(), "notes", fileName));
}

export async function getNote(slug) {
  const source = loadNote(slug);

  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
  });
}

export async function getNotes({
  newest = true,
  page = 1,
  limit = 8,
  tags,
} = {}) {
  const files = fs.readdirSync(path.join(process.cwd(), "notes"));
  const notes = await Promise.all(
    files.map(async (fileName) => {
      const { frontmatter } = await getNote(fileName);

      return {
        frontmatter,
        slug: fileName.replace(".mdx", ""),
      };
    })
  );

  let filteredNotes = notes;

  if (tags) {
    filteredNotes = filteredNotes.filter((note) =>
      note.frontmatter.tags.some((tag) => tags.includes(tag))
    );
  }

  if (newest) {
    filteredNotes.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(a.frontmatter.date);

      return dateB - dateA;
    });
  } else {
    filteredNotes.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(a.frontmatter.date);

      return dateA - dateB;
    });
  }

  //pagination
  const startIndex = (page - 1) * limit; //0
  const endIndex = page * limit; // 10
  return {
    notes: filteredNotes.slice(startIndex, endIndex),
    pageCount: Math.ceil(filteredNotes.length / limit),
  };
}
