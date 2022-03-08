export default async function fileUploadServer(url: any, formData: any) {
  try {
    const response = await fetch(url, {
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
