type LoadMoreButtonProps = {
  onClick: () => void
}


function LoadMoreButton({ onClick }: LoadMoreButtonProps) {
  return (
    <button onClick={onClick} className='more-posts'>
      Показать еще
    </button>
  );
}

export default LoadMoreButton;