import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Post } from '../types/postsType'

export const postsApi = createApi ({
  reducerPath: 'postsApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({baseUrl: 'https://db-yn5k.onrender.com/'}),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit = "") => `posts?${limit && `_limit=${limit}`}`,
      providesTags: (result) =>
        result
          ? [
              { type: 'Posts', id: 'LIST' },
              ...result.map(({ id }: {id: number}) => ({ type: 'Posts' as const, id })),
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'Posts', id: 'LIST'}]
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{type: 'Posts', id: 'LIST'}]
    })
  })
 })

 export const { useGetPostsQuery, useGetPostByIdQuery, useAddPostMutation, useDeletePostMutation } = postsApi