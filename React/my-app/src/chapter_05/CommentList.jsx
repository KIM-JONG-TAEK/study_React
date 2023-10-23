import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "������",
        comment: "�ȳ��ϼ���, �����Դϴ�.",
    },
    {
        name: "���缮",
        comment: "����Ʈ ����־��~!",
    },
    {
        name: "���ΰ�",
        comment: "���� ����Ʈ ������� �;��!!",
    },
]

function CommentList(props) {
    return (
      <div>
        {comments.map((comment) => {
            return (
                <Comment name={comment.name} comment={comment.comment} />        
            );
        })}
      </div>  
    );
}

export default CommentList;