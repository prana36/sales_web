import { useEffect, useState } from "react";
import {
  DynamicContent,
  getDynamicContent,
} from "../api/dynamic-content";

export const emptyDynamicContent: DynamicContent = {
  courses: [],
  blogs: [],
  downloads: [],
};

export type DynamicContentStatus = "loading" | "ready" | "empty";

export function useDynamicContent() {
  const [content, setContent] = useState<DynamicContent>(emptyDynamicContent);
  const [status, setStatus] = useState<DynamicContentStatus>("loading");

  useEffect(() => {
    let isMounted = true;

    getDynamicContent()
      .then((data) => {
        if (!isMounted) {
          return;
        }

        setContent(data);
        setStatus(
          data.courses.length || data.blogs.length || data.downloads.length
            ? "ready"
            : "empty",
        );
      })
      .catch(() => {
        if (isMounted) {
          setStatus("empty");
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { content, status };
}
