import './FlyingBall.scss';

function FlyingBall(e) {
  const ballBlockNode = document.createElement('div');
  ballBlockNode.className="ball-block";
  document.body.appendChild(ballBlockNode);
  const ballNode = document.createElement('div');
  ballNode.className = "ball";
  ballBlockNode.appendChild(ballNode);
  const addIconTop = event.target.getBoundingClientRect().top;
  const addIconLeft = event.target.getBoundingClientRect().left;
  ballBlockNode.style.top = addIconTop + 'px';
  ballBlockNode.style.left = addIconLeft + 'px';
  const relativeY = window.innerHeight - addIconTop;
  ballBlockNode.style.display = '';
  ballBlockNode.style.webkitTransform = `translate3d(0, ${relativeY}px, 0)`;
  ballBlockNode.style.transform = `translate3d(0, ${relativeY}px, 0)`;
  ballNode.style.webkitTransform = `translate3d(-${addIconLeft - 11}px, 0, 0)`;
  ballNode.style.transform = `translate3d(-${addIconLeft - 11}px, 0, 0)`;
  setTimeout(() => {
    document.body.removeChild(ballBlockNode);
    document.querySelector('.count-info').classList.add('bound');
    setTimeout(() => {
      document.querySelector('.count-info').classList.remove('bound');
    }, 400)
  }, 620);
}

export { FlyingBall };
