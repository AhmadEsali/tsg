import { ReactSVG } from 'react-svg';
import classnames from 'classnames';

const iconGenerator =
  (iconSrc: any) =>
  ({ id = '', className = '' }) => {
    const iconClasses = classnames({
      icon: true,
      [className]: className.length > 0,
    });

    return <ReactSVG id={id} src={iconSrc as string} className={iconClasses} />;
  };

export default iconGenerator;
