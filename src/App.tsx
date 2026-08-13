import type { Project } from './projects'
import { projects } from './projects'

function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project-card" href={project.path} aria-label={`打开 ${project.name}`}>
      <div className="project-card__topline">
        <span className="project-card__sequence">{project.sequence}</span>
        <span className={`status status--${project.status}`}>
          <span className="status__dot" aria-hidden="true" />
          {project.status === 'online' ? '在线' : '建设中'}
        </span>
      </div>

      <div className="project-card__content">
        <p className="project-card__category">{project.category}</p>
        <h2>{project.name}</h2>
        <p className="project-card__description">{project.description}</p>
      </div>

      <ul className="technology-list" aria-label="项目技术栈">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div className="project-card__footer">
        <span className="project-card__url">{project.displayUrl}</span>
        <span className="project-card__action" aria-hidden="true">
          进入项目 <span>↗</span>
        </span>
      </div>
    </a>
  )
}

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="/" aria-label="Zhijin Projects 首页">
          <span className="brand__mark" aria-hidden="true">
            Z
          </span>
          <span>
            <strong>ZHJIN.FUN</strong>
            <small>PROJECT DIRECTORY</small>
          </span>
        </a>

        <div className="site-header__meta">
          <span className="live-dot" aria-hidden="true" />
          {projects.length} 个项目在线
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="page-title">
          <p className="eyebrow">
            <span>PERSONAL LAB</span>
            <span className="eyebrow__line" aria-hidden="true" />
            <span>2026</span>
          </p>
          <h1 id="page-title">
            把每一个想法，
            <span>放到正确的入口。</span>
          </h1>
          <div className="hero__bottom">
            <p>
              这里收录了我正在构建和持续迭代的项目。
              <br />
              选择一个入口，开始探索。
            </p>
            <span className="hero__hint" aria-hidden="true">
              SCROLL TO EXPLORE
              <span>↓</span>
            </span>
          </div>
        </section>

        <section className="projects-section" aria-labelledby="projects-title">
          <div className="section-heading">
            <p id="projects-title">SELECTED PROJECTS</p>
            <span>{String(projects.length).padStart(2, '0')} / PROJECTS</span>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.path} project={project} />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>ZHJIN PROJECTS</span>
        <span>Cloudflare × AWS</span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}

export default App
