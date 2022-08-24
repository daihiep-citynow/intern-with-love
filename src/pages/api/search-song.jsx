const getCarouselList = (req, res) => {
  if (req.method === "GET") {
    res.json({
      statusCode: 200,
      data: [
        { id: 1, title: "The Sound of Silence", artist: "Simon & Garfunkel" },
        { id: 2, title: "The Boxer", artist: "Simon & Garfunkel" },
        { id: 3, title: "Scarborough Fair", artist: "Simon & Garfunkel" },
        { id: 4, title: "Bridge Over Troubled Water", artist: "Simon & Garfunkel" },
      ],
    });
  }
};

export default getCarouselList;
