

const host ="https://wedev-api.sky.pro/api/v1/test1/comments"
export const fetchComments = () => {
    return fetch(host).then(res =>{
        return res.json()
    })
    .then(responseData => {

        const appComments = responseData.comments.map(comment =>{
            console.log(comment)
            return{
                name: comment.author.name,
                date: comment.date,
                commentText: comment.text,
                likeCounter: comment.likes,
                aktiveLike: false,
            }
        })
        return appComments
    })
}