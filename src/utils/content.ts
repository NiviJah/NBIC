import frontMatter from 'front-matter';

export interface Content<T> {
  attributes: T;
  body: string;
  filename: string;
}

export async function loadContent<T>(glob: Record<string, () => Promise<string>>): Promise<Content<T>[]> {
  const contentPromises = Object.entries(glob).map(async ([path, loader]) => {
    const markdown = await loader();
    const { attributes, body } = frontMatter<T>(markdown);
    const filename = path.split('/').pop()?.replace('.md', '') || '';
    
    return {
      attributes,
      body,
      filename
    };
  });

  return Promise.all(contentPromises);
}

export function loadContentSync<T>(glob: Record<string, string>): Content<T>[] {
  return Object.entries(glob).map(([path, markdown]) => {
    const { attributes, body } = frontMatter<T>(markdown);
    const filename = path.split('/').pop()?.replace('.md', '') || '';
    
    return {
      attributes,
      body,
      filename
    };
  });
}
