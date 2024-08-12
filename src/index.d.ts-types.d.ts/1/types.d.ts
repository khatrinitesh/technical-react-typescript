export type Post = {
    id:number;
    title:string;
    content:string;
    author:string;
}

export type User = {
    id:number;
    name:string;
    email:string;
}

export type PostListProps = {
    posts:Post[];
}