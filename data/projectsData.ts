interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Moadoom',
    description: `Helps you manage your social media content. Publish to YouTube, TikTok, and Instagram all in one place.`,
    imgSrc: '/static/images/google.png',
    href: 'https://moadoom.com',
  },
]

export default projectsData
