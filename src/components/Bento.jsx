/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Bento = () => {
  const items = [
    {
      title: "Software Development",
      bgUrl: "https://utfs.io/f/45db56b4-fcbc-405f-9a32-639dd26ae5d4-7ww0a5.webp",
      span: "md:col-span-2"
    },
    {
      title: "IoT",
      bgUrl: "https://utfs.io/f/99987ff4-0356-4eb5-8752-5a911c91ae16-jix0ph.webp",
      span: ""
    },
    {
      title: "AR / VR",
      bgUrl: "https://utfs.io/f/70fda93e-bb32-48ac-970c-122cf9522b33-4o1izf.webp",
      span: ""
    },
    {
      title: "Deep Learning",
      bgUrl: "https://utfs.io/f/0c0cee8a-ac36-4a7f-ad32-6f8a607a66b4-1olvry.webp",
      span: ""
    },
    {
      title: "Robotics",
      bgUrl: "https://utfs.io/f/32334e43-5a46-4ceb-b837-18b2ffaa6af5-97vajq.webp",
      span: ""
    },
    {
      title: "Embedded Systems",
      bgUrl: "https://utfs.io/f/6371fd59-dbc3-4213-93ed-2c3e8a79b050-emqu4w.webp",
      span: ""
    },
    {
      title: "Big Data Analytics",
      bgUrl: "https://utfs.io/f/a27099a8-3adc-41c7-9ea2-dd0522b67de6-cvb6ow.webp",
      span: "md:col-span-2"
    }
  ];

  return (
    <main className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 text-2xl font-semibold mb-36">
      {items.map((item, index) => (
        <GridItem
          key={index}
          title={item.title}
          bgUrl={item.bgUrl}
          span={item.span}
          delay={index * 0.025}
        />
      ))}
    </main>
  );
};

const GridItem = ({ title, bgUrl, span, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      className={`relative cursor-pointer h-48 rounded bg-center bg-no-repeat bg-cover ${span}`}
      style={{ backgroundImage: `url(${bgUrl})` }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className='flex items-center justify-center absolute w-full h-full bg-purple-transparent'>
        {title}
      </div>
    </motion.div>
  );
};

export default Bento;