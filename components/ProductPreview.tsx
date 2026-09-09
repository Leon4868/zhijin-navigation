import Image from 'next/image'

export function ProductPreview() {
  return (
    <div className="product-preview">
      <div className="preview-chrome">
        <span />
        <span />
        <span />
        <p>产品设计预览 · 非客户案例</p>
      </div>
      <Image
        src="/images/system/creative-production-dashboard.png"
        alt="ZHJIN AI 中台的素材生产界面设计预览"
        width={1316}
        height={1021}
        priority
      />
    </div>
  )
}
