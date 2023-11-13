// React 라이브러리와 Component 클래스를 import합니다.
import React, { Component } from "react";

// 다른 컴포넌트들을 import합니다.
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

// 이미지 파일들을 import합니다.
import webImg from "./img/music.png";
import htmlImg from "./img/rock.png";
import cssImg from "./img/pop.png";
import jsImg from "./img/jazz.png";
import reactImg from "./img/rap.png";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "Music", sub: "Welcome to the music world" },
      welcome: { title: "welcome!!", desc: "음악의 세계에 오신걸 환영합니다!. 어디서나 들려오는 또는 이제는 들리지 않는 음악까지 여러분들께 소개해드립니다!" ,image: webImg},
      contents: [
        { id: 1, title: "Rock", desc: "록은 가장 야만적인 음악 중 하나입니다. 시작은 척 베리의 기타에서 시작되어서 비틀즈가 세계로 뻗어놓았습니다. 현재는 들리지 않는 옛날 장르의 노래이지만 가장 신나는 노래입니다. 제가 추천드리는 록 밴드는 오아시스, 레드 핫 칠리 페퍼스, 너버나, ACDC정도 입니다. 90년대를 화려하게 누비던 이들의 노래는 지금 듣는 우리들에게도 심장을 뜨겁게 만들어줍니다.", image: htmlImg,
      },
        { id: 2, title: "POP", desc: "팝이란 장르는 록처럼 특색이 있다기 보다는 인기있는 대중적인 음악들을 지칭하는 단어입니다. 그렇기에 재즈나 록 또한 과거에는 팝에 속해있었다고 볼 수 있죠. 현재는 더욱 광활한 팝이 세계를 지배하고있습니다. 세계를 누비던 팝가수들은 마이클 잭슨, 엘비스 프레슬리, 저스틴 비버 등이 있습니다. 이들은 다른 시대에서 인기를 누렸던 만큼 서로 완전히 다른 색의 음악을 보여줍니다.  ", image: cssImg },
        { id: 3, title: "JAZZ", desc: "재즈는 미국 뉴올리언스에서 시작된 음악입니다. 재즈의 가장 큰 특징은 악기들의 특징을 가장 감각적으로 연주함으로써 사람들의 마음을 흔들어 놓습니다. 그리고 가사가 없는 재즈는 특히 더욱 무드있다고 할 수 있죠. 제가 가장 좋아하는 쳇 베이커는 비오는 날 감성적인 색소폰소리가 정말 감명 깊습니다. 이외에도 빌 에반스의 피아노 소리는 많은 생각이 들게 만들어주죠. 이들은 가사가 없는 곡들인데도 불구하고 정말 인상깊습니다.", image: jsImg },
        { id: 4, title: "Rap", desc: "랩은 각운과 리듬에 맞추어 말하는 듯이 박자를 맞추어 내뱉는 음악입니다. 그래서 주로 노동계층에 존재하던 사람들이 사회에 대한 비판을 랩을 통해 세상에 메세지를 전하고 뜻을 하나로 모으기 적합한 장르였습니다. 현재는 더욱 다양한 무드에 음악으로 성장했습니다.여태까지 들었던 래퍼들 중에서는 에미넴, 제이지, 칸예웨스트, 켄드릭 라마 이들은 자신들의 생각을 다양한 박자와 방식과 라임으로 사람들에게 전합니다. 듣는 우리들은 그 생각을 공감하기도 하고 많은 생각을 들게 만들어줍니다.",image: reactImg },
      ],
    };
  }
  render() {
    var _title,
      _desc,
      _image = null;
      
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;

    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _image = data.image;

          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc} img={_image}></Content>
      </div>
    );
  }
}

export default App;
