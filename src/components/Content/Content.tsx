import { Component } from 'react';

class Content extends Component {
  state = {
    items: [
      {
        title: 'Item #1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada. Fusce id velit ut tortor pretium viverra suspendisse. Eu augue ut lectus arcu. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Phasellus egestas tellus rutrum tellus pellentesque eu.',
      },
      {
        title: 'Item #2',
        text: 'Vel turpis nunc eget lorem dolor sed viverra. Consectetur purus ut faucibus pulvinar. Enim diam vulputate ut pharetra sit amet aliquam id. Vulputate mi sit amet mauris. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Mauris augue neque gravida in.',
      },
      {
        title: 'Item #3',
        text: 'Aliquet nec ullamcorper sit amet. Vitae tempus quam pellentesque nec nam aliquam sem. Semper eget duis at tellus at. Ultricies lacus sed turpis tincidunt id aliquet. Interdum posuere lorem ipsum dolor. Arcu felis bibendum ut tristique et egestas. Pharetra et ultrices neque ornare aenean euismod. Eu sem integer vitae justo eget.',
      },
      {
        title: 'Item #4',
        text: 'Id eu nisl nunc mi ipsum. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Mi tempus imperdiet nulla malesuada pellentesque. Suscipit adipiscing bibendum est ultricies. Mattis enim ut tellus elementum sagittis vitae et. Sapien et ligula ullamcorper malesuada proin libero nunc consequat.',
      },
      {
        title: 'Item #5',
        text: 'Quis lectus nulla at volutpat diam ut venenatis tellus in. Fringilla ut morbi tincidunt augue interdum velit euismod. Id ornare arcu odio ut sem nulla pharetra diam sit. Arcu ac tortor dignissim convallis. Scelerisque felis imperdiet proin fermentum leo. Lorem ipsum dolor sit amet. Enim tortor at auctor urna nunc id cursus metus. Amet aliquam id diam maecenas ultricies mi eget mauris.',
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.items.length &&
          this.state.items.map(({ title, text }) => (
            <div key={title}>
              <h3>{title}</h3>
              <div>{text}</div>
            </div>
          ))}
      </div>
    );
  }
}

export default Content;
