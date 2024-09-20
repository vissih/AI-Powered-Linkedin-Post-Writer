"use client";

import { createContext, useState } from "react";

interface PostContextTypes {
  output: { data: { post: string }[] };
  loading: boolean;
  setOutput: React.Dispatch<React.SetStateAction<{ data: { post: string }[] }>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PostContext = createContext<PostContextTypes>({
  output: { data: [] },
  loading: false,
  setOutput: () => {},
  setLoading: () => {},
});

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [output, setOutput] = useState<{ data: { post: string }[] }>({
    data: [],
  });
  const [loading, setLoading] = useState(false);
  console.log("Output Values: ", output);

  return (
    <PostContext.Provider value={{ output, setOutput, setLoading, loading }}>
      {children}
    </PostContext.Provider>
  );
};
