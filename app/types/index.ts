export type WorkData = {
    time: string;
    title: string;
    workplace: string;
    detail: string;
    projects: [];
    stack: [];
}

export type ProjectData = {
    id: number;
    name: string;
}
export type ArticleData = {
    id: number;
    url:string;
    headline: string;
    year: number;
    image: string;
}

export type AboutData = {
    past: string;
    present: string;
    outofwork: string;
  }
