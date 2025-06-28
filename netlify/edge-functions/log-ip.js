export default async (request, context) => {
  const ip = request.headers.get('x-nf-client-connection-ip');
  console.log("접속한 IP:", ip);  // Netlify 로그에서 확인 가능
  return context.next();
};
