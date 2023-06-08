import Movie from "./Movie";

export default function TitleList(props) {
  return (
    <div class="titleList">
      <div class="title">
        <h1>{props.providerName}</h1>
        <div class="titles-wrapper">
          <Movie />
        </div>
      </div>
    </div>
  );
}
