// export default function Button(props) {
//   return <button className="btn">{props.children}</button>;
// }

export default function Beranda() {
  return (
    <div className=" mt-16">
      <header>
        <div className="w-full sm:max-w-xl mx-auto bg-blue-400 p-10">
          Halo Semua
        </div>
      </header>
    </div>
  );
}

export function Contents() {
  return (
    <div className="flex flex-col">
      <content>
        <div className="w-full sm:max-w-xl mx-auto bg-red-400 p-10">
          Halo angga
        </div>
      </content>
    </div>
  );
}
