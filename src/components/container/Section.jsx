import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title} </h2>

      {children}
    </section>
  );
};

Section.prototype = {
  children: PropTypes.node,
};

export { Section };
