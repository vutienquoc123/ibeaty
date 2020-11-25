export default function HanldleError(err) {
  if (err.response) {
    console.log('Lỗi response', err.response.status);
    console.log('Lỗi response', err.response.data);
    console.log('Lỗi response', err.response.headers);
  } else if (err.request) {
    console.log('Lỗi request', err.request);
  } else {
    console.log('Error', err.message);
  }
  console.log(err);
}
