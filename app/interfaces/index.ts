export interface Work {
    time: string;
    title: string;
    workplace: string;
    detail: string;
    projects: [];
    stack: [];
}

export interface Project {
    id: number;
    name: string;
}
export interface Article {
    name: string;
    year: number;
}

export interface AboutData {
    past: string;
    present: string;
    outofwork: string;
  }