import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Page } from "@/types/Page";

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


export async function getPages(): Promise<Page> {
  const client = createClient({
    projectId: "f5t7diuj",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-05-16",
  });

  return client.fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  const client = createClient({
    projectId: "f5t7diuj",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-05-16",
  });

  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}