import { getFeaturedPosts, getProjects } from "@/services";
import React from "react";
import PostCard from "../RecentPost";
import ProjectCard from "../ProjectCard";

export default function PostSection({ projects }) {
  console.log(projects);
  return (
    <div>
      Featured post Posts
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-start gap-10">
          <div>
            <ul></ul>
          </div>
          <div>featured post two</div>
        </div>
        <div>Recent Post</div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: { projects },
  };
}
