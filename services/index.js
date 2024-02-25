import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProjects = async () => {
  const query = gql`
    query MyQuery {
      projects(skip: 2) {
        description
        title
        tag
        github
        preview
        projectImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.projects;
};

export const getFeaturedProjects = async () => {
  const query = gql`
    query MyQuery {
      featuredProjects(skip: 1, orderBy: publishedAt_DESC) {
        title
        slug
        tag
        previewLink
        githubLink
        projectImage {
          url
        }
        description
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.featuredProjects;
};

export const getNavLinks = async () => {
  const query = gql`
    query MyQuery {
      navLinks {
        name
        href
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.navLinks;
};

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(orderBy: publishedAt_DESC) {
        title
        tag
        publishedDate
        slug
        excerpt
        content {
          raw
        }
        featuredImage {
          url
        }
        categoryS {
          name
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query MyQuery {
      featuredPosts {
        title
        slug
        excerpt
        updatedAt
        content {
          raw
        }
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.featuredPosts;
};

export const getBookNotes = async () => {
  const query = gql`
    query MyQuery {
      books {
        title
        author
        slug
        bookNote {
          raw
        }
        bookCategory
        bookCover {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.books;
};

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categoryS {
        name
        posts {
          title
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.categoryS;
};

export const getAbout = async () => {
  const query = gql`
    query MyQuery {
      abouts {
        details {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.abouts;
};
