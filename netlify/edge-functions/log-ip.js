export default async (request, context) => {
  const ip =
    request.headers.get('x-nf-client-connection-ip') ||
    request.headers.get('x-forwarded-for') ||
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('client-ip') ||
    '알 수 없음';

  // --- 추가된 부분: IP 주소를 Netlify Edge Function 로그에 기록합니다. ---
  context.log(`Edge Function IP Log: ${ip}`);
  // ------------------------------------------------------------------

  return new Response(`Your IP is: ${ip}`, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
};
