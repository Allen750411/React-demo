import Card from './Card';
import './style.scss';

const Example3 = () => {
  return (
    <section className="flex" data-name="Example3">
      <Card
        img="http://fakeimg.pl/500x300/3498db/"
        name="milkmidi"
        price={100}
        soldOut={false}
      />
      <Card img="http://fakeimg.pl/500x300/e74c3c/" name="奶綠茶" price={200}>
        <h1 className="bg-info">我是子元素</h1>
      </Card>
    </section>
  );
};
export default Example3;
