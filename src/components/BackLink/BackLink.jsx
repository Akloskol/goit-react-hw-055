import { IoIosArrowDropleft } from 'react-icons/io';
import css from './BackLink.module.css';
import { Link } from 'react-router-dom';

export const BackLink = ({ href }) => {
  return (
    <>
      <Link to={href}>
        <div className={css.btn_back}>
          <IoIosArrowDropleft size="24" />
          BACK
        </div>
      </Link>
    </>
  );
};
