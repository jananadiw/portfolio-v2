export type Work = {
    time: string;
    title: string;
    workplace: string;
    detail: string;
    projects: [];
    stack: [];
}

export type Project = {
    id: number;
    name: string;
}
export type Article = {
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
