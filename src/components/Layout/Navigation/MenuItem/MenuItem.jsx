import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: (props) => ({
    width: '150px',
    textTransform: 'uppercase',
    fontSize: '18px',
    textAlign: 'center',
    '& > a': {
      '&:first-child': {
        marginLeft: 0,
      },
      margin: '0 25px',
      textDecoration: 'none',
      color: 'inherit',
      '&.active': {
        color: 'inherit',
        fontWeight: 800,
        content: `"${props.text}"`,
      },
    },
    '&:hover a': {
      opacity: 0,
    },
    '&:hover::before': {
      position: 'absolute',
      fontWeight: 800,
      content: `"${props.text}"`,
    },
  }),
});

const MenuItem = ({ link, text, exact }) => {
  const classes = useStyles({ link, text });

  return (
    <li className={classes.root}>
      {link.includes('#') ? (
        <Link href={link}>{text}</Link>
      ) : (
        <NavLink to={link} exact={exact}>{text}</NavLink>
      )}
    </li>
  );
};

MenuItem.propTypes = {
  exact: PropTypes.bool,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  exact: false,
};

export default MenuItem;
