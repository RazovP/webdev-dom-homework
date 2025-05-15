

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

export const postComment = (name, text, retryCount = 3) => {
    return fetch(host, {
        method: "POST",
        body: JSON.stringify({
            name,
            text,
            forceError: true
        })
    })
        .then((response) => {
            console.log(response.status)
            if (response.status === 500) {
                if (retryCount > 0) {
                    console.warn(`Ошибка 500, повторная попытка... Осталось попыток: ${retryCount}`);
                    return postComment(name, text, retryCount - 1); // Повторная попытка
                } else {
                    throw new Error("Сервер сломался");
                }

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
            if (error instanceof TypeError) {
                alert("Проблема с подключением к интернету. Проверьте ваше соединение.");
                return;
            }
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