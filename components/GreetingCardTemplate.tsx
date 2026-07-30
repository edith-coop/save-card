'use client';


interface GreetingCardTemplateProps {
  cardRef: React.RefObject<HTMLDivElement | null>;
}

const fontStyles = `
<style>
  @font-face {
    font-family: 'Playpen Sans';
    src: url('/fonts/playpen-sans/PlaypenSans-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Playpen Sans';
    src: url('/fonts/playpen-sans/PlaypenSans-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Playpen Sans';
    src: url('/fonts/playpen-sans/PlaypenSans-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  .greeting-card-font {
    font-family: 'Playpen Sans', cursive !important;
  }
</style>
`;
const tramTiepSucSoulmateTemplate = `
${fontStyles}
<div class="greeting-card-font" style="position: relative; width: 1000px; height: 1000px; font-family: 'Playpen Sans', cursive; font-weight: 400; font-style: normal; font-size: 26px; line-height: 160%; letter-spacing: -0.05em; color: #4D4D4D;">
  <img src="/img/tram-tiep-suc-card-v2.png" style="width: 1000px; height: 1000px; object-fit: cover;" />
  <div style="position: absolute; width: 852px; height: 543px; top: 240px; left: 83px;">
    <div style="width: 668px; height: 317px; top: 65px; left: 91px; position: absolute;">
      <p style="margin-bottom: 16px;">
        <span style="font-weight: 600; color: #CC0000;">[A]</span> thân mến, chúng mình đã đồng hành với nhau từ <span style="font-weight: 600; color: #CC0000;">[C]</span> tại <span style="font-weight: 600; color: #CC0000;">[E]</span>.
      </p>
      <p style="margin-bottom: 16px;">
        
      </p>
      <p style="margin-bottom: 16px;">
         Thấm thoát đã <span style="font-weight: 600; color: #CC0000;">[F]</span> ngày trôi qua, <span style="font-weight: 600; color: #CC0000;">[A]</span> đã cùng FPT Shop chốt thành công <span style="font-weight: 600; color: #CC0000;">[B]</span> đơn hàng!
      </p>
      <p style="margin-bottom: 16px;">
        Với sự gắn bó quý giá này, <span style="font-weight: 600; color: #CC0000;">[A]</span> chính là <span style="font-weight: 600; color: #CC0000;">[D]</span> không thể thiếu của mình đó❤️
      </p>
      <p style="margin-bottom: 16px;">
        Để tiếp thêm năng lượng cho chặng đường mới, bộ ưu đãi đã được chuẩn bị sẵn. Lên App chốt deal, nhận quà ngay thôi!
      </p>
    </div>
  </div>
</div>
`;
export function GreetingCardTemplate({
  cardRef,
}: GreetingCardTemplateProps) {

  const content = tramTiepSucSoulmateTemplate

  return (
    <div
      ref={cardRef}
      dangerouslySetInnerHTML={{ __html: content }}
      className="fixed -left-[9999px] top-0"
    />
  );
}
