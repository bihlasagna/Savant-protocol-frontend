import HowItem from 'components/HowItem';
import './index.scss';

const vehicles = [
  {
    title: 'TOKENIZED',
    desc: 'Traditional assets are too expensive for the average investor and have large barriers to entry. Our platform franctionalizes these assets via tokenization, making them accesible to everyone.',
  },
  {
    title: 'INVESTMENT',
    desc: 'Nam molestie vehicula malesuada. Fusce eleifend vulputate libero et dictum. Fusce volutpat scelerisque ipsum, sed dignissim lorem euismod et.',
    focus: true,
  },
  {
    title: 'VEHICLES',
    desc: 'Whether its funding your FinTech start-up or opening the next best restaurant on your block, Savant allows you to build your own story. Dream big.  ',
  },
];

const How = () => {
  return (
    <div className="how-works flex flex-col justify-center items-center">
      <div className="title text-white font-bold text-4xl">
        HOW SAVANT WORKS
      </div>
      <div className="works-items flex flex-row justify-center items-center">
        {vehicles.map(({ title, desc, focus }, index) => (
          <HowItem title={title} desc={desc} key={index} focus={focus} />
        ))}
      </div>
    </div>
  );
};

export default How;
