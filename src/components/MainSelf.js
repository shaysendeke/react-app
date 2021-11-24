import React from "react";
import "./mainSelf.css";


// import Media from "media"

class Main extends React.Component {
  constructor(jj) {
    super();
  }

  render() {
    return (
      <main className="Main">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        <p>totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non</p>
        <p>numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        <img  id ="personalImage"src="https://cdn.pixabay.com/photo/2015/03/01/22/27/women-655353__340.jpg" alt=""/><br/><hr/>
        <video controls src="https://player.vimeo.com/external/266043652.sd.mp4?s=98fbd5b5cbcc37404bb3bc1e63c85e1b7f2b6017&profile_id=164" />   
      </main>
      )};
  }


export default Main;
