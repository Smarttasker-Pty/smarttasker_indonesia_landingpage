const ANDROID_URL = 'https://play.google.com/store/apps/details?id=au.smarttasker.id';
const IOS_URL = 'https://apps.apple.com/id/app/smarttasker-indonesia/id6788846912';

export default async function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const target = isIOS ? IOS_URL : ANDROID_URL;

  res.writeHead(302, { Location: target, 'Cache-Control': 'no-store' });
  res.end();
}
