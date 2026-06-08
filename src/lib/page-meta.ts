import { useEffect } from "react";

type Meta = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function usePageMeta(m: Meta) {
  useEffect(() => {
    document.title = m.title;
    if (m.description) upsertMeta("name", "description", m.description);
    if (m.ogTitle) upsertMeta("property", "og:title", m.ogTitle);
    if (m.ogDescription) upsertMeta("property", "og:description", m.ogDescription);
    if (m.ogImage) upsertMeta("property", "og:image", m.ogImage);
  }, [m.title, m.description, m.ogTitle, m.ogDescription, m.ogImage]);
}
