import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bienvenidos a la base de conocimiento de Aparking',
    Svg: require('@site/static/img/logoAparking.svg').default,
    description: (
      <>
        Aquí podrás encontar todos los documentos que forman parte de nuestra base de conocimiento, ¡Explora sin miedo!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={styles.featureContainer}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
