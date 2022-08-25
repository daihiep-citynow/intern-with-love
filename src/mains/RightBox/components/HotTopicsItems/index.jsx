// data
import dataSources from "@/mocks/hot-topics/hot-topics-items.json";
// components
import HotTopicsItem from "../HotTopicsItem";

const Items = () => (
  <>
    {dataSources.map((item) => (
      <HotTopicsItem key={item.id} src={item.image} href={item.href} />
    ))}
  </>
);

export default Items;
