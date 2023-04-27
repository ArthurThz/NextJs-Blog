import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rqfxmbidjlggwfwxuihv.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZnhtYmlkamxnZ3dmd3h1aWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1MzgxNzcsImV4cCI6MTk5NjExNDE3N30.rouiDGwDFU0l6UOsLhB52QzJS3kABlHuv0rdNc7HKzY',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZnhtYmlkamxnZ3dmd3h1aWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1MzgxNzcsImV4cCI6MTk5NjExNDE3N30.rouiDGwDFU0l6UOsLhB52QzJS3kABlHuv0rdNc7HKzY',
  },
});
