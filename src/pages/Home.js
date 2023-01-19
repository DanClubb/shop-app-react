import CategoryCards from "../components/UI/CategoryCards";

function Home() {
  document.querySelector("body").style.overflow = "hidden";
  return (
    <div>
      <h1>Home</h1>
      <CategoryCards />
    </div>
  );
}

export default Home;
