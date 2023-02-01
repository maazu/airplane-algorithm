const Footer = () => {
  return (
    <div>
      <p
        style={{
          textAlign: 'center',
          bottom: 0,
          position: 'fixed',
          width: '100%',
          padding: '20px',
        }}
      >
        Prepared By Muhammad Maaz |{' '}
        <a href='https://www.linkedin.com/in/mmaaz/' target='_blank_'>
          Linkedin{' '}
        </a>
        |
        <a href='https://www.github.com/maazu/' target='_blank_'>
          {' '}
          Github
        </a>
      </p>
    </div>
  );
};

export default Footer;
