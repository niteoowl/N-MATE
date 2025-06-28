export default async (request, context) => {
  const ip =
    request.headers.get('x-nf-client-connection-ip') ||
    request.headers.get('x-forwarded-for') ||
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('client-ip') ||
    '알 수 없음';

  return new Response(`Your IP is: ${ip}`, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
};
