import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 64,
        background: "linear-gradient(to right, #ec4899, #f59e0b, #fcd34d)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: 40,
      }}
    >
      <div style={{ fontSize: 96, fontWeight: "bold", marginBottom: 20 }}>Eluma</div>
      <div style={{ fontSize: 48, textAlign: "center", maxWidth: "80%" }}>Die smarte Messaging-Plattform</div>
    </div>,
    {
      ...size,
    },
  )
}

