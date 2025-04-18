import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            background: "linear-gradient(to right, #ec4899, #eab308)",
            backgroundClip: "text",
            color: "transparent",
            fontSize: 80,
            fontWeight: "bold",
          }}
        >
          Elumalab
        </div>
        <div style={{ fontSize: 36, color: "#333", marginTop: 20 }}>Die All-in-One Messaging-Plattform</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
