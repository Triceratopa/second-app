import React from "react";

/*prima di tutto creo una struttura base per la commentArea*/

const CommentArea= ({bookId,comments}) => {
    return (
        <div>
            {bookId ? (
        <>
          <h3>Commenti per il libro con ID: {bookId}</h3>
          {comments && comments.length > 0 ? (
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment.comment}</li>
              ))}
            </ul>
          ) : (
            <p>Nessun commento disponibile per questo libro.</p>
          )}
        </>
      ) : (
        <p>Seleziona un libro per visualizzare i commenti</p>
      )}
        </div>
    )
}
export default CommentArea