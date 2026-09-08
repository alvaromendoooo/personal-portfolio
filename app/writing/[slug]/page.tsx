import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeftIcon } from "lucide-react"
import { profile, writing } from "@/lib/portfolio-data"

export function generateStaticParams() {
  return writing.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = writing.find((item) => item.slug === slug)
  return post ? { title: `${post.title.en} — ${profile.name}`, description: post.excerpt.en } : {}
}

export default async function WritingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = writing.find((item) => item.slug === slug)
  if (!post) notFound()

  return (
    <main className="site-container article-page">
      <a className="article-back" href="/#writing"><ArrowLeftIcon /> Back to writing</a>
      <p className="eyebrow">{post.date} · {post.readingTime} · {post.tags.join(" · ")}</p>
      <h1>{post.title.en}</h1>
      <p className="article-lead">{post.excerpt.en}</p>
      <div className="article-placeholder">
        <p>This note is being written in public. The full article will be published here soon.</p>
        <p>For now, this space is a small record of the questions I’m exploring while building backend systems and learning how to operate them well.</p>
      </div>
    </main>
  )
}
