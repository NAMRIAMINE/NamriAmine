import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Namri Amine - Senior JavaScript Full-Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        fontFamily: 'system-ui, sans-serif',
        padding: '64px 80px',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          backgroundColor: '#0284c7',
        }}
      />

      <div
        style={{
          fontSize: 72,
          fontWeight: 800,
          color: '#0f172a',
          lineHeight: 1.1,
          letterSpacing: '-2px',
        }}
      >
        Namri Amine
      </div>

      <div
        style={{
          fontSize: 36,
          fontWeight: 600,
          color: '#0284c7',
          marginTop: '16px',
        }}
      >
        Senior JavaScript Full-Stack Developer
      </div>

      <div
        style={{
          fontSize: 24,
          color: '#475569',
          marginTop: '20px',
          fontWeight: 400,
        }}
      >
        SaaS Platforms | APIs | Next.js | Node.js | FastAPI | AI Workflows
      </div>

      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginTop: '40px',
          flexWrap: 'wrap',
        }}
      >
        {['Next.js', 'React', 'TypeScript', 'Node.js', 'FastAPI'].map((tech) => (
          <div
            key={tech}
            style={{
              padding: '8px 20px',
              borderRadius: '9999px',
              border: '1.5px solid #e2e8f0',
              backgroundColor: '#f8fafc',
              color: '#334155',
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            {tech}
          </div>
        ))}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: '#e2e8f0',
        }}
      />
    </div>,
    { ...size },
  )
}
