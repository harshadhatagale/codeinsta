import fs from "fs";
import path from "path";

const postDirectory= path.join(process.cwd(), "posts");

export function getPostSlugs(){
    return fs.readdirSync(postDirectory);
}
export function getPostByslug(slug){
    const fileContent  = fs.readFileSync(path.join(postDirectory, slug), "utf-8");
    return{
        slug,
        content:fileContent,
    }
}