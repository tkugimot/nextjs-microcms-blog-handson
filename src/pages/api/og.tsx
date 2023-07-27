import { ImageResponse, NextRequest } from 'next/server'
import { Avatar } from '@chakra-ui/react'

export const config = {
  runtime: 'edge',
}

const font = fetch(
  new URL('../../../assets/NotoSansJP-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'

    const fontData = await font

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 56,
            color: '#2d2d2d', // タイトルの文字色
            background: 'linear-gradient(to right, #00d2ff, #ffffff)',
            width: '100%',
            height: '100%',
            padding: '50px 100px',
            textAlign: 'center',
            display: 'flex', // 親要素をフレックスボックスとして配置
            flexDirection: 'column', // 縦方向に配置
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {`${title} 📝`}
          <div
            style={{
              position: 'absolute', // 擬似要素を絶対配置に設定
              bottom: 20, // 下方向の余白を設定
              left: 20, // 左方向の余白を設定
              fontSize: 36, // ここでフォントサイズを調整
              color: '#2d2d2d', // @tkugimotの文字色
            }}
          >
            @tkugimot
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              fontSize: 36,
              color: '#008b8b', // zubora-codeの文字色
            }}
          >
            Zubora Code 🐯
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // Supported options: 'twemoji', 'blobmoji', 'noto', 'openmoji', 'fluent' and 'fluentFlat'
        // Default to 'twemoji'
        emoji: 'twemoji',
        fonts: [
          {
            name: 'NotoSansJP',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
