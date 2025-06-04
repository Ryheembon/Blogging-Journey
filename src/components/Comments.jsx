import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Reply } from 'lucide-react';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      author: 'Anonymous', // In a real app, this would be the logged-in user
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: [],
      isReply: false
    };

    if (replyTo) {
      setComments(prevComments => 
        prevComments.map(c => 
          c.id === replyTo 
            ? { ...c, replies: [...c.replies, { ...comment, isReply: true }] }
            : c
        )
      );
      setReplyTo(null);
    } else {
      setComments(prev => [comment, ...prev]);
    }
    setNewComment('');
  };

  const Comment = ({ comment, onReply }) => (
    <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
          <span className="text-purple-400 font-bold">
            {comment.author[0].toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-purple-400">{comment.author}</h4>
            <span className="text-sm text-gray-500">
              {new Date(comment.timestamp).toLocaleDateString()}
            </span>
          </div>
          <p className="mt-2 text-gray-300">{comment.text}</p>
          <div className="flex items-center space-x-4 mt-3">
            <button 
              className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition-colors"
              onClick={() => onReply(comment.id)}
            >
              <Reply className="w-4 h-4" />
              <span>Reply</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition-colors">
              <ThumbsUp className="w-4 h-4" />
              <span>{comment.likes}</span>
            </button>
          </div>
          {comment.replies?.length > 0 && (
            <div className="ml-8 mt-4 space-y-4">
              {comment.replies.map(reply => (
                <Comment key={reply.id} comment={reply} onReply={onReply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <MessageCircle className="w-6 h-6 mr-2 text-purple-400" />
        Comments
      </h3>
      
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="flex space-x-4">
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={replyTo ? "Write a reply..." : "Write a comment..."}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
              rows="3"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
          >
            Post
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} onReply={setReplyTo} />
        ))}
      </div>
    </div>
  );
};

export default Comments; 