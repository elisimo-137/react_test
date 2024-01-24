import { Preberi_vec } from "./Preberi_vec";

export function Zival(props) {
  const { name, desc, url, image } = props.data;
  return (
    <div className="zival">
      <img src={image} />
      <h2>{name}</h2>
      <p>{desc}</p>
      <Preberi_vec href={url}>{name}</Preberi_vec>
    </div>
  );
}
