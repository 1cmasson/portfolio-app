import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import classNames from 'classnames';

const ScrollEffect = (props) => {
  const [animated, setAnimated] = useState(false);
  const node = useRef();

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = throttle(() => {
    if (!animated) {
      const element = node.current;
      const top = posTop();
      const elementPositionY = element.getBoundingClientRect().top + top;
      const scrollPositionY = window.scrollY ? window.scrollY : window.pageYOffset;
      const windowHeight = window.innerHeight;
      if (scrollPositionY + (windowHeight) >= elementPositionY + (props.offset * 1)) {
        setAnimated(true);
        if (props.queueClass) {
          queueAnimate();
        }
        if (props.callback) {
          singleAnimate();
        }
      }
    }
  }, 200);

  const posTop = () => {
    if (typeof window.pageYOffset !== 'undefined') {
      return window.pageYOffset;
    } else if (document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    } else if (document.body.scrollTop) {
      return document.body.scrollTop;
    }
    return 0;
  }

  const queueAnimate = () => {
    const element = node.current;
    const checkClass = el =>
      el.className === props.queueClass;
    let number = 0;
    const setClass = (el) => {
      const element1 = el;
      element1.style.visibility = 'hidden';
      setTimeout(() => {
        element1.style.visibility = 'visible';
        element1.className = `${element1.className} animate__animated ${props.animate}`;
      }, number * (props.queueDuration * 1000));
      number += 1;
    };
    const findClass = (element2) => {
      Array.prototype.forEach.call(element2.childNodes, (child) => {
        findClass(child);
        if (checkClass(child)) {
          setClass(child);
        }
      });
    };

    // Find queue classes 
    findClass(element);

    // Callback 
    setTimeout(() => {
      props.callback();
    }, props.duration * 1000 * number);
  }

  // This is for the callback function to work.
  const singleAnimate = () => {
    setAnimated(true);
    /* callback */
    setTimeout(() => {
      props.callback();
    }, props.duration * 1000);
  }

  const style = {};
  if (!animated) {
    style.visibility = 'hidden';
  }

  if (props.duration !== '') {
    style.WebkitAnimationDuration = `${props.duration}s`;
    style.animationDuration = `${props.duration}s`;
  }

  return (
    <div
      className={
        classNames(
          {
            animate__animated: true,
            [props.animate]: animated && props.queueClass === '',
          },
          props.className
        )
      }
      style={{style, ...props.style}}
      ref={node}
    >
      {props.children}
    </div>
  );
}

ScrollEffect.defaultProps = {
  component: 'div',
  animate: 'animate__fadeInUp',
  offset: 100,
  className: '',
  duration: 1,
  queueDuration: 1,
  queueClass: '',
  callback: () => {}
};

ScrollEffect.propTypes = {
  animate: PropTypes.string,
  callback: PropTypes.func,
  duration: PropTypes.number,
  offset: PropTypes.number,
  queueClass: PropTypes.string,
  queueDuration: PropTypes.number,
};

export default ScrollEffect;