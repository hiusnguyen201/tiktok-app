import Header from "~/components/Layouts/components/Header";

function OnlyHeader({ children }) {
  return (
    <div>
      <Header></Header>
      <div class="container">
        <div class="content">{children}</div>
      </div>
    </div>
  );
}

export default OnlyHeader;
