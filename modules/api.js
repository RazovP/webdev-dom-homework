

const host = "https://wedev-api.sky.pro/api/v1/test/comments"
export const fetchComments = () => {
    return fetch(host).then(res => {
        return res.json()
    })
        .then(responseData => {

            const appComments = responseData.comments.map(comment => {
                console.log(comment)
                return {
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

export const postComment = (name, text) => {
    return fetch(host, {
        method: "POST",
        body: JSON.stringify({
            name,
            text,
            forceError: true
        })
    })
        .then((response) => {
            if (response.status === 500) {
                throw new Error("Сервер сломался");
            }

            if (response.status === 400) {
                throw new Error("Плохой запрос");
            }

            return response.json();
        })

        .then((json) => {
            console.log(json);
        })
        .then(() => {
            return fetchComments()
        })

        .catch((error) => {
            if (error.message === "Сервер сломался") {
                alert("Сервер сломался, попробуй позже");
                return;
            }

            if (error.message === "Плохой запрос") {
                alert("Ты сделал ошибку в запросе, исправь данные и попробуй снова");
                return;
            }

            console.log(error);
        })

}