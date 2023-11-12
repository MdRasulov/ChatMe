import axios from 'axios';
import { createRequest } from '../api';

export const getErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) return error.response?.data;

  if (error instanceof Error) return error.message;

  return String(error);
};

export const uploadImg = async (img: File) => {
  const formData = new FormData();
  formData.append('file', img);
  const res = await createRequest.post('/upload', formData);

  return res.data;
};
