import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} width="60%" alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Luz Noceda"
      img="https://ucarecdn.com/1c255ef7-533e-4f74-8ada-e403d5c5d959/-/progressive/yes/-/format/auto/"
      tel="+123 456 7890"
      email="luz@toh.com"
    />

    <Card
      name="Eda Clawthorne"
      img="https://i.pinimg.com/564x/69/8d/4c/698d4cfe112127e62b58dee95820c8c2.jpg"
      tel="+123 456 7890"
      email="owllady@toh.com"
    />
    <Card
      name="Hooty"
      img="https://steamuserimages-a.akamaihd.net/ugc/1702911301182996387/14681D67DA4533E5DEBE7F4A1C5A3647610E5092/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
      tel="+123 456 7890"
      email="hoothoot@toh.com"
    />
  </div>,
  document.getElementById("root")
);
