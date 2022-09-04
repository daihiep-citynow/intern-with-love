import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <p>
      Detail:
      {slug}
    </p>
  );
};

export default Detail;
