export default function Block(props: any) {
  return (
    <div
      className="blockDiv text-5xl cursor-pointer w-20 h-20 bg-white rounded-lg transition-all duration-300 flex justify-center items-center"
      onClick={(e) => props.handler(e, props.id)}
    >
      {props.value}
    </div>
  );
}
