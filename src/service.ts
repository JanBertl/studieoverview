import axios from "axios";

export interface Developer {
  userId: string;
  firstName: string;
  lastName: string;
}

export async function getDevelopers(){
  const response = await axios.get('http://localhost:4004/service-course/overview');
  if (response.status !== 200) throw new Error('Get Request failed!');
  return response.data.value;
}
