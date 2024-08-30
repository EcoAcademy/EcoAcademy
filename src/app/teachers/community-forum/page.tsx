'use client';

import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  replies: Reply[];
}

interface Reply {
  id: number;
  author: string;
  content: string;
  createdAt: Date;
}

export default function CommunityForumPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [newReply, setNewReply] = useState({ content: '', postId: null, author: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch posts from the server or load from local storage
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  useEffect(() => {
    // Save posts to local storage
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handlePostSubmit = () => {
    const { title, content } = newPost;
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (trimmedTitle && trimmedContent) {
      const newPostData: Post = {
        id: Date.now(),
        title: trimmedTitle,
        content: trimmedContent,
        createdAt: new Date(),
        replies: [],
      };
      setPosts([...posts, newPostData]);
      setNewPost({ title: '', content: '' });
      setError('');
    } else {
      setError('Please enter a title and post content.');
    }
  };

  const handleReplySubmit = (postId: number) => {
    const trimmedContent = newReply.content.trim();
    if (trimmedContent) {
      const newReplyData: Reply = {
        id: Date.now(),
        author: newReply.author,
        content: trimmedContent,
        createdAt: new Date(),
      };
      setPosts(
        posts.map((post) =>
          post.id === postId
            ? { ...post, replies: [...post.replies, newReplyData] }
            : post
        )
      );
      setNewReply({ content: '', postId: null, author: '' });
    }
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Community Forum</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Connect with other teachers, share ideas, and discuss best practices.
      </p>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
        <div className="flex flex-col items-start mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 px-4 mb-4 w-full"
            placeholder="Post Title"
            value={newPost.title}
            onChange={(e) =>
              setNewPost({ ...newPost, title: e.target.value })
            }
          />
          <textarea
            className="border border-gray-300 rounded-md py-2 px-4 mr-4 w-full resize-none"
            placeholder="Write your post here..."
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
            rows={3}
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mt-4"
            onClick={handlePostSubmit}
          >
            Post
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        {posts.length > 0 ? (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md py-2 px-4 mr-4 w-1/4"
                    placeholder="Your Name"
                    value={newReply.postId === post.id ? newReply.author : ''}
                    onChange={(e) =>
                      setNewReply({ ...newReply, author: e.target.value, postId: post.id })
                    }
                  />
                  <textarea
                    className="border border-gray-300 rounded-md py-2 px-4 mr-4 w-3/4 resize-none"
                    placeholder="Write a reply..."
                    value={newReply.postId === post.id ? newReply.content : ''}
                    onChange={(e) =>
                      setNewReply({ ...newReply, content: e.target.value, postId: post.id })
                    }
                    rows={2}
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => handleReplySubmit(post.id)}
                  >
                    Reply
                  </button>
                </div>
                {post.replies.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Replies</h4>
                    <ul className="space-y-2">
                      {post.replies.map((reply) => (
                        <li
                          key={reply.id}
                          className="bg-gray-100 rounded-md p-4 flex justify-between items-center"
                        >
                          <div>
                            <p className="text-gray-700">{reply.content}</p>
                            <p className="text-gray-500 text-sm">
                              By: {reply.author}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No posts yet.</p>
        )}
      </div>
    </div>
  );
}
