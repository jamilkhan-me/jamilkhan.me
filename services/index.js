import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProjects = async () => {
  const query = gql`
    query MyQuery {
      projects(skip: 2) {
        description
        title
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
      featuredProjects {
        title
        slug
        previewLink
        githubLink
        description
        projectImage {
          url
        }
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
      posts {
        title
        publishedDate
        slug
        excerpt
        featuredImage {
          url
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
        slud
        excerpt
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
