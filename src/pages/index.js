import React from "react"
import Layout from "../components/Layout/Layout"

import ArticlesBlock from "../components/ArticlesBlock/ArticlesBlock"
import ClientLogosBlock from "../components/ClientLogosBlock/ClientLogosBlock"

export default () => {
  const pageContent = {
    serviceOverview: {
      title: "What I do",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus itaque consequatur labore, nostrum hic suscipit, distinctio temporibus quod ipsum voluptatum incidunt quisquam sit dignissimos, quia autem doloribus esse quas?",
      articles: [
        {
          title: "Outsourcing",
          img: "https://via.placeholder.com/366x210",
          body:
            "Are you finding yourself with limited time or resource? Outsource your projects to Rooster Design to help ease the load.",
        },
        {
          title: "Contracting",
          img: "https://via.placeholder.com/366x210",
          body:
            "I am always on the lookout for UI/UX Designer or Front End Developer contracts in and around the West Midlands area.",
        },
        {
          title: "Freelance",
          img: "https://via.placeholder.com/366x210",
          body:
            "Are you looking to redo your current website or start a new project? Rooster Design can bring your ideas to life..",
        },
      ],
    },
    clientLogos: {
      title: "Who I work with",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus itaque consequatur labore, nostrum hic suscipit, distinctio temporibus quod ipsum voluptatum incidunt quisquam sit dignissimos, quia autem doloribus esse quas?",
      logos: [
        {
          src: "https://via.placeholder.com/260",
          name: "Joe Bloggs Ltd",
        },
        {
          src: "https://via.placeholder.com/260",
          name: "Joe Bloggs Ltd",
        },
        {
          src: "https://via.placeholder.com/260",
          name: "Joe Bloggs Ltd",
        },
        {
          src: "https://via.placeholder.com/260",
          name: "Joe Bloggs Ltd",
        },
        {
          src: "https://via.placeholder.com/260",
          name: "Joe Bloggs Ltd",
        },
        {
          src: "https://via.placeholder.com/260",
          name: "Joe Bloggs Ltd",
        },
        {
          src: "https://via.placeholder.com/260",
          name: "Joe Bloggs Ltd",
        },
        {
          src: "https://via.placeholder.com/260",
          name: "Joe Bloggs Ltd",
        },
      ],
    },
    skillsOverview: {
      title: "Why choose me?",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus itaque consequatur labore, nostrum hic suscipit, distinctio temporibus quod ipsum voluptatum incidunt quisquam sit dignissimos, quia autem doloribus esse quas?",
      articles: [
        {
          title: "Adaptable",
          img: "https://via.placeholder.com/366x210",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus itaque consequatur labore.",
        },
        {
          title: "Reliable",
          img: "https://via.placeholder.com/366x210",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus itaque consequatur labore.",
        },
        {
          title: "Pioneering",
          img: "https://via.placeholder.com/366x210",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus itaque consequatur labore.",
        },
      ],
    },
  }
  return (
    <Layout location="home">
      <ArticlesBlock content={pageContent.serviceOverview} />
      <ClientLogosBlock content={pageContent.clientLogos} />
      <ArticlesBlock content={pageContent.skillsOverview} />
    </Layout>
  )
}
