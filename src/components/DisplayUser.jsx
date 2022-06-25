const DisplayUser = ({
  author,
  content,
  imageUrl,
  readMoreUrl,
  title,
  url,
}) => {
  return (
    <div className='container p-3'>
      <div className='row'>
        <div className='col-6 d-block m-auto'>
          <img
            src={imageUrl}
            alt={author}
            width={220}
            height={180}
            className='mb-5'
          />
          <h1 className='text-decoration-underline text-muted'>{author}</h1>
        </div>
        <div className='col-6'>
          <h3>{title}</h3>
          <p>{content}</p>
          <a href={url}>{readMoreUrl}</a>
        </div>
      </div>
    </div>
  );
};
export default DisplayUser;
