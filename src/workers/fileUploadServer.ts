export default async function fileUploadServer(url: any, formData: any) {
  try {
    const URL =
      'https://carryanything.in/dashboard/API/user//upload-image-server.php';
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    return response;
  } catch (err) {
    console.log(err);
    return false;
  }
}
