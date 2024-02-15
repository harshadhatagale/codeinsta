const Posts=[
    {
        id:1,
        title: "Post1",
        content: "This is Post 1"
    },
    {
        id:2,
        title: "Post2",
        content: "This is Post 2"
    },
    {
        id:3,
        title: "Post3",
        content: "This is Post 3"
    },
    {
        id:4,
        title: "Post4",
        content: "This is Post 4"
    },
    {
        id:5,
        title: "Post5",
        content: "This is Post 5"
    },
]

export default function handler(req, res){
    res.status(200).json(Posts)
}