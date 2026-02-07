import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Namri Amine - Full Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              background: 'linear-gradient(to right, #3b82f6, #a855f7, #ec4899)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Namri Amine
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#94a3b8',
              fontWeight: 500,
            }}
          >
            Full Stack Developer
          </div>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '20px',
            }}
          >
            {['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  border: '1px solid #334155',
                  color: '#e2e8f0',
                  fontSize: 20,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
