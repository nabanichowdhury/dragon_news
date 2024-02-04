const getSingleNewsById = async (id) => {
  const res = await fetch(
    `https://the-news-portal-server.vercel.app/news/${id}`
  );
  return res.json();
};

export default getSingleNewsById;
