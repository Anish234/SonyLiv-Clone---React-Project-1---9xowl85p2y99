
const BASE_URL = 'https://academics.newtonschool.co/api/v1/ott';
export const PROJECT_ID = '9xowl85p2y99'
export const fetchShows = async (page, limit) => {
  try {
    const response = await fetch(`${BASE_URL}/show?page=${page}&limit=${limit}`, {
      headers: {
        projectId: PROJECT_ID,
      },
    });
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching shows:', error);
    alert(`Server is down. Please try after sometime `)
    return [];
  }
};