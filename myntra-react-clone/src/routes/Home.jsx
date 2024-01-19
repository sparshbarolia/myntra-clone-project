import { useSelector } from "react-redux";
import HomeItem from "../components/Homeitem";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    //   <main>
    //       <div className="items-container">
    //           <HomeItem item={item} />
    //       </div>
    //   </main>
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;