import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "f5t7diuj",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-05-16",
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "f5t7diuj",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-05-16",
  });

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}
