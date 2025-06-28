export default async (request, context) => {
  const ip =
    request.headers.get('x-nf-client-connection-ip') ||
    request.headers.get('x-forwarded-for') ||
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('client-ip') ||
    '알 수 없음';

  // --- 이 부분이 핵심입니다: Netlify Edge Function 로그에 IP 주소를 기록합니다. ---
  context.log(`Client IP Access on path ${request.url}: ${ip}`);
  // --------------------------------------------------------------------------------

  // --- 이 부분이 핵심입니다: 원래 요청된 페이지 콘텐츠를 로드하도록 요청을 다음 핸들러로 전달합니다. ---
  // `new Response(...)`를 반환하면 페이지 콘텐츠를 덮어쓰게 됩니다.
  // `context.next()`를 사용하면 Edge Function이 실행된 후 원래 페이지가 로드됩니다.
  return context.next();
  // --------------------------------------------------------------------------------------------------
};
